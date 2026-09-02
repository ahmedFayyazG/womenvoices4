import { spawn } from "node:child_process";

const baseUrl = "http://127.0.0.1:3100";
const requiredRoutes = [
  "/",
  "/about",
  "/training",
  "/volunteering",
  "/reports",
  "/stories",
  "/contact",
  "/support",
  "/privacy",
  "/terms",
  "/legal",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/opengraph-image",
];

const server = spawn(
  "npm",
  ["run", "start", "--", "--hostname", "127.0.0.1", "--port", "3100"],
  { detached: true, stdio: ["ignore", "pipe", "pipe"] },
);

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Production server did not become ready");
}

try {
  await waitForServer();

  for (const route of requiredRoutes) {
    const response = await fetch(`${baseUrl}${route}`);
    if (!response.ok) {
      throw new Error(`${route} returned ${response.status}`);
    }
  }

  const homepage = await fetch(baseUrl).then((response) => response.text());
  const anchors = [...homepage.matchAll(/<a\b([^>]*)>/g)];
  const anchorsWithoutHref = anchors.filter((match) => !/\bhref=/.test(match[1]));
  if (anchorsWithoutHref.length > 0) {
    throw new Error(`${anchorsWithoutHref.length} anchors are missing href attributes`);
  }

  const internalHrefs = new Set(
    [...homepage.matchAll(/href="(\/[^"]*)"/g)]
      .map((match) => match[1].split("#")[0])
      .filter((href) => !href.startsWith("/_next")),
  );

  for (const href of internalHrefs) {
    const response = await fetch(`${baseUrl}${href}`);
    if (!response.ok) throw new Error(`Homepage link ${href} returned ${response.status}`);
  }

  if (homepage.includes("fonts.googleapis.com")) {
    throw new Error("Homepage still makes a browser request to Google Fonts");
  }

  console.log(
    `Production verification passed: ${requiredRoutes.length} routes, ${anchors.length} linked anchors, ${internalHrefs.size} internal homepage destinations.`,
  );
} finally {
  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {
    server.kill("SIGTERM");
  }
}

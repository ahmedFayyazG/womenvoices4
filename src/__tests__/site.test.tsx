import { existsSync } from "node:fs";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import Home from "@/app/page";
import ContactPage from "@/app/contact/page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  contact,
  dropdownMenus,
  primaryNavigation,
  siteRoutes,
} from "@/lib/site";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

afterEach(cleanup);

describe("site structure", () => {
  test("every sitemap route has an App Router page", () => {
    for (const route of siteRoutes) {
      const pagePath =
        route === "/"
          ? "src/app/page.tsx"
          : `src/app${route}/page.tsx`;
      expect(existsSync(pagePath), `${route} is missing ${pagePath}`).toBe(true);
    }
  });

  test("all navigation destinations are valid", () => {
    const knownPaths = new Set(siteRoutes);
    const hrefs = [
      ...primaryNavigation.map((item) => item.href),
      ...Object.values(dropdownMenus).flatMap((items) =>
        items.map((item) => item.href),
      ),
    ];

    for (const href of hrefs) {
      if (href.startsWith("mailto:")) continue;
      expect(knownPaths.has(href.split("#")[0] as (typeof siteRoutes)[number])).toBe(true);
    }
  });
});

describe("homepage", () => {
  test("retains both requested programme sections and What Guides Us", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "WHAT WE DO" })).toBeDefined();
    expect(screen.getByRole("heading", { name: "OUR ACTIVITIES" })).toBeDefined();
    expect(screen.getByRole("heading", { name: "What Guides Us" })).toBeDefined();
  });
});

describe("contact form", () => {
  test("collects the essential enquiry details using the free form endpoint", () => {
    const { container } = render(<ContactPage />);
    const form = container.querySelector("form");

    expect(form?.getAttribute("action")).toBe(
      `https://formsubmit.co/${contact.email}`,
    );
    expect(screen.getByLabelText("Full name").hasAttribute("required")).toBe(true);
    expect(screen.getByLabelText("Email address").hasAttribute("required")).toBe(true);
    expect(screen.getByLabelText("How can we help?").hasAttribute("required")).toBe(true);
    expect(screen.getByRole("button", { name: /send enquiry/i })).toBeDefined();
  });
});

describe("shared navigation", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  test("mobile menu reports its open state accessibly", () => {
    render(<SiteHeader />);
    const button = screen.getByRole("button", { name: "Open navigation menu" });
    expect(button.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: "Close navigation menu" }).getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByRole("dialog", { name: "Mobile navigation" }).getAttribute("aria-hidden")).toBe("false");
  });

  test("footer exposes working contact and legal links", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("link", { name: contact.email }).getAttribute("href")).toBe(`mailto:${contact.email}`);
    expect(screen.getByRole("link", { name: contact.phoneDisplay }).getAttribute("href")).toBe(`tel:${contact.phoneHref}`);
    expect(screen.getByRole("link", { name: "Privacy & Cookies" }).getAttribute("href")).toBe("/privacy");
  });
});

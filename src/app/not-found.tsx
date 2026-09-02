import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <span>404</span>
      <h1>PAGE NOT FOUND</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link href="/">RETURN TO THE HOMEPAGE →</Link>
    </section>
  );
}

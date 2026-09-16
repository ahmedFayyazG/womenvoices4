import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <>
      <section className="page-hero">
        <div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <div className="content-page">{children}</div>
    </>
  );
}

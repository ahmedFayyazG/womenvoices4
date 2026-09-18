"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  dropdownMenus,
  primaryNavigation,
  type MenuKey,
} from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<MenuKey | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>("a[href], button"),
      );
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <Link className="mark" href="/" aria-label="Women’s Voices home">
          <Image
            src="/WVLogo-cropped.webp"
            alt="Women’s Voices CIC"
            width={720}
            height={487}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const menu = item.menu;
            return menu ? (
              <div
                className="nav-menu-item"
                key={item.label}
                onMouseEnter={() => setOpenMenu(menu)}
                onMouseLeave={(event) => {
                  const next = event.relatedTarget as Node | null;
                  const mega = document.getElementById("desktop-mega-menu");
                  if (!next || !mega?.contains(next)) setOpenMenu(null);
                }}
              >
                <Link href={item.href} onClick={() => setOpenMenu(null)}>
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="menu-toggle"
                  aria-label={`Open ${item.label.toLowerCase()} menu`}
                  aria-expanded={openMenu === menu}
                  aria-controls="desktop-mega-menu"
                  onClick={() =>
                    setOpenMenu((current) =>
                      current === menu ? null : menu,
                    )
                  }
                  onFocus={() => setOpenMenu(menu)}
                >
                  <span aria-hidden="true">⌄</span>
                </button>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onFocus={() => setOpenMenu(null)}
                onClick={() => setOpenMenu(null)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="partner" href="/support">
            SUPPORT OUR WORK
          </Link>
          <Link className="contact-cta" href="/contact" aria-label="Contact Women’s Voices">
            <span className="sr-only">Contact</span>
            <b aria-hidden="true">→</b>
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={`hamb ${mobileOpen ? "on" : ""}`}
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <span>{mobileOpen ? "CLOSE" : "MENU"}</span>
        </button>

        <div
          id="desktop-mega-menu"
          className={`mega ${openMenu ? "show" : ""}`}
          aria-hidden={!openMenu}
          onMouseEnter={() => undefined}
          onMouseLeave={() => setOpenMenu(null)}
        >
          {openMenu ? (
            <>
              <h2>{openMenu}</h2>
              {dropdownMenus[openMenu].map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setOpenMenu(null)}>
                  {item.label} <b aria-hidden="true">↗</b>
                </Link>
              ))}
            </>
          ) : null}
        </div>
      </header>

      <aside
        ref={drawerRef}
        id="mobile-menu"
        className={`drawer ${mobileOpen ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="drawer-in">
          {primaryNavigation.map((item, index) => {
            const menu = item.menu;
            return (
              <div className="mobile-nav-item" key={item.label}>
                <div className="mobile-nav-row">
                  <Link
                    href={item.href}
                    tabIndex={mobileOpen ? 0 : -1}
                    onClick={() => setMobileOpen(false)}
                  >
                    <em>{String(index + 1).padStart(2, "0")}</em>
                    {item.label}
                  </Link>
                  {menu ? (
                    <button
                      type="button"
                      className="mobile-submenu-toggle"
                      tabIndex={mobileOpen ? 0 : -1}
                      aria-expanded={mobileSubmenu === menu}
                      aria-controls={`mobile-submenu-${menu.toLowerCase()}`}
                      aria-label={`${mobileSubmenu === menu ? "Close" : "Open"} ${item.label.toLowerCase()} submenu`}
                      onClick={() => setMobileSubmenu((current) => current === menu ? null : menu)}
                    >
                      <span aria-hidden="true">{mobileSubmenu === menu ? "−" : "+"}</span>
                    </button>
                  ) : <b aria-hidden="true">→</b>}
                </div>
                {menu ? (
                  <div
                    id={`mobile-submenu-${menu.toLowerCase()}`}
                    className={`mobile-submenu ${mobileSubmenu === menu ? "show" : ""}`}
                  >
                    {dropdownMenus[menu].map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        tabIndex={mobileOpen && mobileSubmenu === menu ? 0 : -1}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileSubmenu(null);
                        }}
                      >
                        {subitem.label}
                        <b aria-hidden="true">→</b>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
          <Link
            className="outline"
            href="/support"
            tabIndex={mobileOpen ? 0 : -1}
            onClick={() => setMobileOpen(false)}
          >
            SUPPORT OUR WORK
          </Link>
          <Link
            className="outline"
            href="/contact"
            tabIndex={mobileOpen ? 0 : -1}
            onClick={() => setMobileOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </aside>
    </>
  );
}

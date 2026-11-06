import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/company";
import { useScrollProgress } from "../hooks/useScrollProgress";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const progress = useScrollProgress();
  const darkHero = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || !darkHero;

  return (
    <>
      <div
        className="nav-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "border-b border-white/10 bg-ht-ink/95 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-site flex h-[4.35rem] items-center justify-between gap-4 sm:h-[4.75rem]">
          <Logo onClick={() => setOpen(false)} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative text-[0.92rem] font-medium tracking-wide no-underline transition-colors ${
                    isActive ? "text-ht-orange" : "text-ht-paper/80 hover:text-ht-paper"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-ht-orange transition-all ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn btn-primary hidden sm:inline-flex">
              Get a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-ht-paper lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-ht-ink-deep transition-transform duration-300 lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container-site flex h-full flex-col pt-24 pb-10">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-display text-4xl font-semibold tracking-[-0.04em] no-underline ${
                    isActive ? "text-ht-orange" : "text-ht-paper"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="btn btn-primary mt-auto w-full">
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}

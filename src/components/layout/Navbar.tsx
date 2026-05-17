import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/config/site";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-hairline"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[72px]">
        <Link to="/" className="group flex items-center gap-2.5" aria-label={site.name}>
          <div className="grid h-8 w-8 place-items-center rounded-sm bg-gold/10 ring-1 ring-gold/30">
            <span className="font-display text-[15px] leading-none text-gold">D</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold tracking-tight text-foreground">
              {site.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Global Limited
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-hairline text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button
            asChild
            size="sm"
            className="hidden h-9 rounded-md bg-gold text-[12.5px] font-medium text-primary-foreground hover:bg-gold/90 md:inline-flex"
          >
            <Link to="/contact">
              Request Consultation
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline glass md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="py-3 text-[15px] font-medium text-foreground/90"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <Button asChild className="flex-1 bg-gold text-primary-foreground hover:bg-gold/90">
                <Link to="/contact">Request Consultation</Link>
              </Button>
              <button
                type="button"
                onClick={toggle}
                aria-label="Toggle theme"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-muted-foreground"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

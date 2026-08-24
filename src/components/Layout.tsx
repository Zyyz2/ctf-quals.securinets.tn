import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";
import IntroSplash from "@/components/IntroSplash";
import { DiscordIcon, XIcon } from "@/components/icons";
import { ArrowUp, BarChart3, CalendarDays, ChevronRight, Facebook, Home, Images, Instagram, Linkedin, LayoutGrid, Mail, Menu, Trophy, Users } from "lucide-react";

const ctftimeLink = "https://ctftime.org/event/3364";
const discordInvite = "https://discord.gg/Xqj6WnNmbQ";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/categories", label: "Categories", icon: LayoutGrid },
  { to: "/schedule", label: "Schedule", icon: CalendarDays },
  { to: "/scoreboard", label: "Scoreboard", icon: BarChart3 },
  { to: "/podium", label: "Last Podium", icon: Trophy },
  { to: "/gallery", label: "Gallery", icon: Images },
  { to: "/team", label: "Team", icon: Users },
  { to: "/contact", label: "Contact", icon: Mail },
];

const SOCIALS = [
  {
    href: ctftimeLink,
    label: "CTFtime",
    icon: (
      <img
        src="https://ctftime.org/favicon.png"
        alt=""
        className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
    ),
  },
  { href: discordInvite, label: "Discord", icon: <DiscordIcon className="h-5 w-5" /> },
  { href: "https://www.facebook.com/Securinets", label: "Facebook", icon: <Facebook className="h-5 w-5" /> },
  { href: "https://x.com/securinets", label: "X", icon: <XIcon className="h-5 w-5" /> },
  { href: "https://www.linkedin.com/company/securinets", label: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
  { href: "https://www.instagram.com/securinets.insat/", label: "Instagram", icon: <Instagram className="h-5 w-5" /> },
];

const Layout = () => {
  const [showTop, setShowTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `group relative flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <div className="min-h-screen bg-background/60 text-foreground">
      <IntroSplash />

      {/* ===== Desktop sidebar ===== */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-60 flex-col border-r border-border bg-background lg:flex">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 px-5 pt-6">
          <img src="https://media.securinets.tn/logo.svg" alt="Securinets INSAT" className="h-9 w-9" loading="eager" decoding="async" />
          <span>
            <span className="block font-display text-base font-semibold leading-tight">Securinets CTF</span>
            <span className="block text-xs text-muted-foreground">Quals 2026</span>
          </span>
        </Link>

        {/* Nav */}
        <div className="relative mt-10 flex-1 px-3">
          <nav className="grid">
            {NAV.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-nav-idx={i}
                className={({ isActive }) => `${navLinkClass({ isActive })} animate-fade-in`}
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
              >
                {({ isActive }: { isActive: boolean }) => (
                  <>
                    <item.icon
                      className={`h-4 w-4 shrink-0 transition-colors duration-300 ${
                        isActive ? "text-primary" : "group-hover:text-foreground"
                      }`}
                    />
                    <span>{item.label}</span>
                    <ChevronRight
                      className={`ml-auto h-4 w-4 shrink-0 -translate-x-1 text-primary opacity-0 transition-all duration-300 ${
                        isActive ? "translate-x-0 opacity-100" : ""
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="space-y-3 p-4">
          <Button asChild variant="discord" className="w-full">
            <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <DiscordIcon className="h-4 w-4" />
              Join our Discord
            </a>
          </Button>
        </div>
      </aside>

      {/* Floating theme toggle (desktop) */}
      <div className="fixed right-4 top-4 z-50 hidden lg:block">
        <ThemeToggle />
      </div>

      {/* ===== Mobile top bar ===== */}
      <header className="sticky top-0 z-50 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/70 lg:hidden">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://media.securinets.tn/logo.svg" alt="Securinets INSAT" className="h-8 w-8" loading="eager" decoding="async" />
            <span className="font-display text-lg font-semibold">Securinets CTF</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 sm:w-96">
                <span className="font-display text-lg font-semibold">Menu</span>
                <nav className="mt-6 grid gap-1">
                  {NAV.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                          isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-6">
                  <Button asChild variant="discord" className="w-full" onClick={() => setMobileOpen(false)}>
                    <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <DiscordIcon className="h-4 w-4" />
                      Join our Discord
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* ===== Content ===== */}
      <div className="lg:pl-60">
        <main id="main-content" className="min-h-[60vh]">
          <div key={pathname} className="animate-page-enter">
            <Outlet />
          </div>
        </main>

        <footer className="border-t border-border">
          <div className="container mx-auto px-4 pb-6 pt-6 text-center text-sm text-muted-foreground">
            <div>© {new Date().getFullYear()} Securinets INSAT</div>
          </div>
        </footer>
      </div>

      {/* Floating social dock */}
      <nav aria-label="Social links" className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 lg:left-[calc(50%+7.5rem)]">
        <div className="flex items-center gap-1 rounded-full border border-border/70 bg-background/80 px-2 py-1 backdrop-blur-md">
          {SOCIALS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group relative grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground"
            >
              {item.icon}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 scale-90 whitespace-nowrap rounded-md border border-border bg-background px-2 py-0.5 text-xs font-medium text-foreground opacity-0 transition-all duration-150 group-hover:scale-100 group-hover:opacity-100">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {showTop && (
        <Button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-24 right-6 z-40 rounded-full shadow-glow lg:bottom-6" variant="hero" size="icon">
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Layout;

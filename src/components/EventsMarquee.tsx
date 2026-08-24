import { Globe, Megaphone, Moon, Newspaper, TerminalSquare, Trophy } from "lucide-react";

const EVENTS = [
  {
    name: "Securiday",
    icon: Megaphone,
    description: "Conferences on National Cybersecurity Day, officially recognized by the Ministry of Higher Education.",
  },
  {
    name: "CyberCamp",
    icon: TerminalSquare,
    description: "Two days of hands-on workshops, crowned by an exciting CTF competition.",
  },
  {
    name: "Unbreaking News",
    icon: Newspaper,
    description: "A hackathon where teams build creative solutions with security in mind from day one.",
  },
  {
    name: "Darkest Hour CTF",
    icon: Moon,
    description: "An intense overnight CTF: 12 hours non-stop to test your limits.",
  },
  {
    name: "Cybersphere Congress",
    icon: Globe,
    description: "Training sessions, competitions and talks with industry experts.",
  },
  {
    name: "GCUP CTF",
    icon: Trophy,
    description: "Organized and authored by Securinets, hosted at the Institut Français de Tunisie (IFT).",
  },
];

/**
 * Infinite marquee of Securinets event cards (from securinets.tn/events).
 */
export const EventsMarquee = () => (
  <section aria-label="Securinets events" className="py-14">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-display font-semibold">Our Events</h2>
      <p className="text-muted-foreground mt-2">More than a CTF: Securinets, all year long.</p>
    </div>

    <div className="group relative select-none overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-28" />

      <div className="flex w-max animate-marquee gap-12 py-2 pr-12 group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
        {[...EVENTS, ...EVENTS].map((event, i) => (
          <div
            key={i}
            className="group w-[300px] shrink-0 border-t border-border pt-4 transition-colors duration-300 hover:border-primary/40"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">{event.name}</h3>
              <event.icon className="h-5 w-5 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </div>
            <p className="mt-1.5 pr-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsMarquee;

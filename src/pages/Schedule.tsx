import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock, Timer, MapPin, ExternalLink, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";

const ctftimeLink = "https://ctftime.org/event/3364";

const Schedule = () => {
  return (
    <div className="section">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-display font-semibold">Schedule &amp; Important Dates</h1>
        <p className="text-muted-foreground mt-2">All times Africa/Tunis (UTC+1).</p>
      </div>

      <div className="grid gap-x-12 gap-y-12 lg:grid-cols-[1fr_340px]">
        {/* Timeline */}
        <div className="relative border-l border-border pl-7 space-y-12">
          {/* Qualifiers */}
          <Reveal>
            <article className="group relative">
              <span aria-hidden className="absolute -left-[33px] top-3 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="w-32 md:w-44 whitespace-nowrap font-display text-4xl md:text-5xl font-bold leading-none tracking-tight">
                  03<span className="text-primary text-2xl md:text-3xl align-middle">-</span>04
                </span>
                <div>
                  <h2 className="font-display text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                    Qualifiers
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground">Sat, Oct 3 → Sun, Oct 4, 2026</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 ml-auto">Online</Badge>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Starts 10:00 UTC+1</span>
                <span className="flex items-center gap-1.5"><Timer className="h-3.5 w-3.5" /> 36 hours non-stop</span>
              </div>
            </article>
          </Reveal>

          {/* Finals */}
          <Reveal delay={120}>
            <article className="group relative">
              <span aria-hidden className="absolute -left-[33px] top-3 h-2 w-2 rounded-full bg-muted-foreground/40 ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="w-32 md:w-44 whitespace-nowrap font-display text-4xl md:text-5xl font-bold leading-none tracking-tight text-muted-foreground/30 select-none">TBA</span>
                <div>
                  <h2 className="font-display text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                    Finals
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground">Date to be announced</p>
                </div>
                <Badge variant="outline" className="bg-muted text-muted-foreground border-border ml-auto">Onsite</Badge>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> INSAT, Tunisia</span>
                <span className="flex items-center gap-1.5"><Trophy className="h-3.5 w-3.5" /> Top qualified teams only</span>
              </div>
            </article>
          </Reveal>
          {/* CTFtime */}
          <Reveal delay={200}>
            <div className="flex flex-col items-center gap-3 pt-2 text-center">
              <p className="text-sm text-muted-foreground">Never miss the start: full standings will live on CTFtime.</p>
              <Button variant="outline" asChild>
                <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="https://ctftime.org/favicon.png" alt="" className="h-4 w-4" loading="lazy" decoding="async" />
                  View on CTFtime <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Side column */}
        <div className="space-y-10">
          <Reveal delay={100}>
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-lg md:text-xl font-semibold tracking-tight">Event Calendar</h2>
                <span className="text-sm text-muted-foreground">Oct 2026</span>
              </div>
              <Calendar
                mode="range"
                defaultMonth={new Date(2026, 9, 1)}
                selected={{ from: new Date(2026, 9, 3), to: new Date(2026, 9, 4) }}
                className="mt-4 rounded-md border"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Location */}
      <section id="location" className="section-tight pt-14">
        <Reveal>
          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Location</h2>
              <MapPin className="h-5 w-5 shrink-0 text-muted-foreground/50" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Qualifiers online. Finals at INSAT, Tunisia.</p>
            <div className="mt-4 rounded-lg overflow-hidden border border-border">
              <iframe
                title="INSAT on Google Maps"
                src="https://www.google.com/maps?q=INSAT%20Tunis&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex gap-3">
              <Button variant="secondary" asChild>
                <a href="https://www.google.com/maps/search/?api=1&query=INSAT+Tunis" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Schedule;

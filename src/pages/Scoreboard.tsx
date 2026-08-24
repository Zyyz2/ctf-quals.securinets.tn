import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { ExternalLink, BarChart3 } from "lucide-react";

const CTFTIME_EVENT = "https://ctftime.org/event/2884";

const TOP_TEAMS = [
  { rank: 1, team: "BunkyoWesterns", points: 8854 },
  { rank: 2, team: "thehackerscrew", points: 8356 },
  { rank: 3, team: "r3kapig", points: 8354 },
  { rank: 4, team: "Nu1L", points: 7435 },
  { rank: 5, team: "ARESx", points: 7430 },
  { rank: 6, team: "PwnSec", points: 7393 },
  { rank: 7, team: "Shellphish", points: 7376 },
  { rank: 8, team: "Infobahn", points: 6897 },
  { rank: 9, team: "team a", points: 6886 },
  { rank: 10, team: "justCatTheFish", points: 6886 },
];

const Scoreboard = () => {
  return (
    <div className="section">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-display font-semibold flex items-center justify-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" /> Scoreboard
        </h1>
        <p className="text-muted-foreground mt-2">Final standings of Securinets CTF Quals 2025.</p>
      </div>

      <div className="border-t border-border pt-4 mx-auto max-w-2xl">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Quals 2025 · Top 10</h2>
          <BarChart3 className="h-5 w-5 shrink-0 text-muted-foreground/50" />
        </div>
        <p className="mt-1 text-sm text-muted-foreground">Oct 4–5, 2025 · 557 teams · ranked on CTFtime</p>

        <Reveal delay={100}>
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-4 font-medium">#</th>
                <th className="py-2 font-medium">Team</th>
                <th className="py-2 text-right font-medium">Points</th>
              </tr>
            </thead>
            <tbody>
              {TOP_TEAMS.map((row) => (
                <tr key={row.rank} className="border-b border-border/40 transition-colors last:border-0 hover:bg-primary/5">
                  <td className={`py-2.5 pr-4 font-display text-lg font-bold leading-none ${row.rank <= 3 ? "text-primary" : "text-muted-foreground/60"}`}>
                    {row.rank}
                  </td>
                  <td className="py-2.5 font-medium">{row.team}</td>
                  <td className="py-2.5 text-right font-display text-base font-semibold tabular-nums">
                    {row.points.toLocaleString("en-US")}
                    <span className="ml-1 text-xs font-normal text-muted-foreground">pts</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-6 flex justify-center">
          <Button variant="secondary" asChild>
            <a href={CTFTIME_EVENT} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Full standings on CTFtime <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;

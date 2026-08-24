import podium1 from "@/assets/podium-1st-aresx.jpg";
import podium2 from "@/assets/podium-2nd-pwnsec.jpg";
import podium3 from "@/assets/podium-3rd-project-sekai.jpg";

import Reveal from "@/components/Reveal";
import { Trophy } from "lucide-react";

const PODIUM = [
  { place: "2", label: "2nd place", name: "Pwnsec", img: podium2, order: "order-2 sm:order-1", drop: "sm:translate-y-14" },
  { place: "1", label: "1st place", name: "ARESx", img: podium1, order: "order-1 sm:order-2", drop: "" },
  { place: "3", label: "3rd place", name: "Project Sekai", img: podium3, order: "order-3", drop: "sm:translate-y-24" },
];

const Podium = () => {
  return (
    <div className="section">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-display font-semibold flex items-center justify-center gap-2">
          <Trophy className="h-6 w-6 text-primary" /> Last Year's Podium
        </h1>
        <p className="text-muted-foreground mt-2">Securinets CTF 2025 finals podium.</p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 items-end sm:grid-cols-3 sm:gap-6 sm:pb-24">
        {PODIUM.map((team, i) => (
          <Reveal key={team.place} delay={i * 120} className={team.drop}>
            <div className={team.order}>
              <div className="overflow-hidden rounded-lg border border-border">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={team.img}
                    alt={`${team.name} at the Securinets CTF 2025 finals`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className={`font-display text-xl font-semibold ${team.label.startsWith("1") ? "text-primary" : ""}`}>{team.name}</p>
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{team.label}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Podium;

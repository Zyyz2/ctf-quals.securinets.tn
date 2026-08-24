import { Bug, CircuitBoard, Cpu, Lock, ScrollText, Search, Shield, Smartphone, Globe, Trophy, BarChart3, Megaphone } from "lucide-react";
import Reveal from "@/components/Reveal";

const RULES = [
  "Solve challenges, submit flags, earn points. Categories are independent.",
  "Scoring is dynamic: challenges lose value as more teams solve them.",
  "No attacking the competition platform or its infrastructure.",
  "No flag sharing, brute forcing the flag endpoint, or collaborating between teams.",
  "Automated scanners against challenge hosts are not allowed.",
  "Violations lead to disqualification. Organizer decisions are final.",
];

const PRIZES = [
  { icon: Trophy, text: "Top teams qualify for the onsite finals at INSAT, Tunisia." },
  { icon: BarChart3, text: "The event is ranked on CTFtime, weight 85.12 last edition." },
  { icon: Megaphone, text: "Prizes for finals winners will be announced on Discord closer to the event." },
];

const CATEGORIES = [
  { name: "Web", icon: Globe, description: "SQL injection, auth bypasses, SSRF, SSTI and framework-specific bugs." },
  { name: "Pwn", icon: Bug, description: "Memory corruption from stack to heap, ROP chains and shellcoding." },
  { name: "Reverse", icon: Cpu, description: "Static and dynamic analysis of binaries, custom VMs and obfuscated code." },
  { name: "Crypto", icon: Lock, description: "Classical ciphers, RSA, AES, elliptic curves and lattice-based attacks." },
  { name: "Forensics", icon: Search, description: "Network captures, memory dumps, disk images and steganography." },
  { name: "OSINT & Misc", icon: Shield, description: "Open-source intelligence, geolocation and a mix of miscellaneous challenges." },
  { name: "Mobile", icon: Smartphone, description: "Android and iOS applications, Frida hooking and mobile-specific bugs." },
  { name: "Hardware", icon: CircuitBoard, description: "Firmware analysis, embedded devices, UART and JTAG debugging." },
];

const CategoryCell = ({ cat }: { cat: (typeof CATEGORIES)[number] }) => (
  <div className="group border-t border-border pt-4">
    <div className="flex items-center justify-between gap-3">
      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
        {cat.name}
      </h3>
      <cat.icon className="h-5 w-5 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5" />
    </div>
    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-swift group-hover:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <p className="pt-2 pr-2 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
      </div>
    </div>
  </div>
);

const Categories = () => {
  return (
    <div>
      <div className="section pb-0">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-semibold">Categories</h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-7">
          {CATEGORIES.map((cat) => (
            <CategoryCell key={cat.name} cat={cat} />
          ))}
        </div>
      </div>

      {/* Rules & Prizes */}
      <section id="rules" className="section">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-semibold flex items-center justify-center gap-2"><ScrollText className="h-6 w-6 text-primary" /> Rules &amp; Prizes</h2>
        </div>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="flex items-center justify-center gap-2 pb-3">
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Rules</h3>
                <ScrollText className="h-5 w-5 shrink-0 text-muted-foreground/50" />
              </div>
              <div className="border-t border-border" />
              <ul className="mt-3">
                {RULES.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 border-b border-border/40 py-2.5 text-sm leading-relaxed last:border-0">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="flex items-center justify-center gap-2 pb-3">
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Prizes</h3>
                <Trophy className="h-5 w-5 shrink-0 text-muted-foreground/50" />
              </div>
              <div className="border-t border-border" />
              <ul className="mt-3">
                {PRIZES.map((prize) => (
                  <li key={prize.text} className="flex items-start gap-3 border-b border-border/40 py-3 text-sm leading-relaxed last:border-0">
                    <prize.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {prize.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Categories;

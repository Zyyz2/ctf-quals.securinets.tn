import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { DiscordIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

const discordInvite = "https://discord.gg/Xqj6WnNmbQ";
const discordServerId = "558606114565128192";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/Securinets" },
  { label: "X", href: "https://x.com/securinets" },
  { label: "Instagram", href: "https://www.instagram.com/securinets.insat/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/securinets" },
  { label: "CTFtime", href: "https://ctftime.org/event/3364" },
];

const Contact = () => {
  return (
    <div className="section">
      <div className="mb-12">
        <h1 className="text-3xl font-display font-semibold">Contact</h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Questions about rules, infrastructure, media or partnership? Reach us through any channel below.
        </p>
      </div>

      <div className="grid gap-x-14 gap-y-10 lg:grid-cols-2">
        {/* Channels */}
        <div>
          <Reveal>
            <div className="group border-t border-border pt-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email us</h2>
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-colors duration-300 group-hover:text-primary" />
              </div>
              <a
                href="mailto:securinets@insat.ucar.tn"
                className="story-link mt-2 inline-block break-all font-display text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-primary"
              >
                securinets@insat.ucar.tn
              </a>
              <p className="mt-1.5 text-sm text-muted-foreground">For official inquiries and sponsorships.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-9 border-t border-border pt-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Discord</h2>
                <DiscordIcon className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-colors duration-300 group-hover:text-[#5865F2]" />
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                The fastest way to reach the organizing team: announcements, support tickets and everything in between.
              </p>
              <Button asChild variant="discord" className="mt-3">
                <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <DiscordIcon className="h-4 w-4" />
                  Join our server
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="group mt-9 border-t border-border pt-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Find us</h2>
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-colors duration-300 group-hover:text-primary" />
              </div>
              <p className="mt-2 font-display text-lg md:text-xl font-semibold">INSAT, Tunisia</p>
              <p className="text-sm text-muted-foreground">
                Institut National des Sciences Appliquées et de Technologie. Home of the onsite finals.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Community widget */}
        <Reveal delay={150}>
          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Community</h2>
              <span className="text-sm text-muted-foreground">live preview</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">A look at the server, right from here.</p>
            <div className="mt-4 rounded-lg overflow-hidden border border-border">
              <iframe
                title="Discord Widget"
                src={`https://discord.com/widget?id=${discordServerId}&theme=dark`}
                className="w-full h-80"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Follow */}
      <Reveal delay={100}>
        <footer className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-border pt-5 text-sm">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Follow along</span>
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="story-link text-muted-foreground transition-colors hover:text-primary">
              {s.label}
            </a>
          ))}
        </footer>
      </Reveal>
    </div>
  );
};

export default Contact;

import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

import gallery01 from "@/assets/gallery-01.jpg";
import gallery02 from "@/assets/gallery-02.jpg";
import gallery03 from "@/assets/gallery-03.jpg";
import gallery04 from "@/assets/gallery-04.jpg";
import gallery05 from "@/assets/gallery-05.jpg";
import gallery06 from "@/assets/gallery-06.jpg";
import gallery07 from "@/assets/gallery-07.jpg";
import gallery08 from "@/assets/gallery-08.jpg";
import gallery09 from "@/assets/gallery-09.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";

const PHOTOS = [
  // Red / neutral interleaved
  gallery13,
  gallery04,
  gallery08,
  gallery06,
  gallery12,
  gallery02,
  gallery11,
  gallery03,
  gallery09,
  gallery07,
  gallery10,
  gallery05,
  gallery01,
  gallery14,
  gallery15,
];

const CAPTION = "Securinets CTF 2025 Finals";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/* Clip-path wipe on scroll-in */
const Reveal = ({ children, delay, fromTop }: { children: React.ReactNode; delay: number; fromTop?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    const failsafe = window.setTimeout(() => setVisible(true), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`break-inside-avoid transition-[clip-path] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? "[clip-path:inset(0_0_0_0)]"
          : fromTop
            ? "[clip-path:inset(0_0_100%_0)]"
            : "[clip-path:inset(100%_0_0_0)]"
      }`}
    >
      {children}
    </div>
  );
};

/* 3D tilt + inner parallax while browsing */
const Tile = ({ src, onOpen }: { src: string; onOpen: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 9, ry: x * 9 });
  };

  const reset = () => setTilt({ rx: 0, ry: 0 });
  const idle = tilt.rx === 0 && tilt.ry === 0;

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onOpen}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: idle ? `transform 700ms ${EASE}, box-shadow 500ms ${EASE}` : "transform 90ms linear",
        boxShadow: idle ? undefined : "0 24px 48px -12px rgba(0,0,0,0.5)",
      }}
      className="group relative mb-4 block w-full overflow-hidden rounded-lg border border-border bg-muted break-inside-avoid will-change-transform"
    >
      <img
        src={src}
        alt={CAPTION}
        loading="lazy"
        decoding="async"
        style={{
          transform: `scale(1.1) translate(${-tilt.ry * 1.6}px, ${tilt.rx * 1.6}px)`,
          transition: idle ? `transform 800ms ${EASE}` : "transform 120ms linear",
        }}
        className="min-h-[220px] max-h-[560px] w-full bg-muted object-cover will-change-transform"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        <Plus className="h-4 w-4" />
      </span>
    </button>
  );
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="section">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-display font-semibold">Gallery</h1>
        <p className="text-muted-foreground mt-2">{CAPTION}.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {PHOTOS.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 120} fromTop={i % 2 === 1}>
            <Tile src={src} onOpen={() => setLightbox(src)} />
          </Reveal>
        ))}
      </div>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{CAPTION}</DialogTitle>
          </DialogHeader>
          {lightbox && <img src={lightbox} alt={CAPTION} className="w-full h-auto rounded-md" />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;

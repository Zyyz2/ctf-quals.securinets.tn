import { useEffect, useState } from "react";

const INTRO_KEY = "securinets-intro-seen";
const LOGO_URL = "https://media.securinets.tn/logo.svg";

const IntroSplash = () => {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(INTRO_KEY)) return;

    setVisible(true);
    document.body.style.overflow = "hidden";
    const exitTimer = setTimeout(() => setLeaving(true), 1600);
    const hideTimer = setTimeout(() => {
      sessionStorage.setItem(INTRO_KEY, "1");
      document.body.style.overflow = "";
      setVisible(false);
    }, 2200);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <img
          src={LOGO_URL}
          alt=""
          className="h-28 w-28 animate-[splash-pop_1s_cubic-bezier(0.22,1,0.36,1)_forwards] drop-shadow-glow"
        />
        <div className="h-0.5 w-40 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full origin-left animate-[splash-bar_1.5s_ease-in-out_forwards] bg-primary" />
        </div>
        <p className="text-sm font-medium tracking-wide text-muted-foreground">Securinets INSAT</p>
      </div>
    </div>
  );
};

export default IntroSplash;

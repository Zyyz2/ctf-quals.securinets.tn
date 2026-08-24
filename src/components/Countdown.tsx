import { Fragment, useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
  durationHours?: number;
  title?: string;
  subtitle?: string;
  className?: string;
}

type Phase = 'upcoming' | 'live' | 'ended';

function diff(targetMs: number): TimeLeft {
  const d = Math.max(0, targetMs - Date.now());
  return {
    days: Math.floor(d / 86_400_000),
    hours: Math.floor((d % 86_400_000) / 3_600_000),
    minutes: Math.floor((d % 3_600_000) / 60_000),
    seconds: Math.floor((d % 60_000) / 1000),
  };
}

const Countdown = ({
  targetDate,
  durationHours = 36,
  title,
  subtitle,
  className = ""
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => diff(targetDate.getTime()));
  const [phase, setPhase] = useState<Phase>('upcoming');

  const targetMs = targetDate.getTime();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const remaining = targetMs - Date.now();
      setTimeLeft(diff(targetMs));
      setPhase(remaining > 0 ? 'upcoming' : remaining > -durationHours * 3_600_000 ? 'live' : 'ended');
      // Re-align to the next whole second so digits never drift or skip
      timer = setTimeout(tick, 1000 - (Date.now() % 1000) + 20);
    };

    tick();
    return () => clearTimeout(timer);
  }, [targetMs, durationHours]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hrs', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div className={className}>
      {/* Status line */}
      {(title || phase !== 'upcoming') && (
        <div className="flex items-center gap-2.5 font-display text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
          <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${phase === 'live' ? 'bg-red-500' : 'bg-primary'}`} />
          {phase === 'upcoming' && title}
          {phase === 'live' && 'Live now'}
          {phase === 'ended' && 'Finished'}
        </div>
      )}

      {phase === 'upcoming' ? (
        <>
          <div className="mt-5 flex items-center justify-center gap-4 md:gap-7">
            {timeUnits.map((unit, i) => (
              <Fragment key={unit.label}>
                {i > 0 && <span aria-hidden className="h-9 w-px bg-border md:h-14" />}
                <div className="text-center">
                  <div
                    key={unit.value}
                    className={`animate-tick font-display font-bold tabular-nums leading-none tracking-tight text-5xl md:text-7xl ${
                      unit.label === 'Sec' ? 'text-primary' : ''
                    }`}
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{unit.label}</div>
                </div>
              </Fragment>
            ))}
          </div>
          {subtitle && (
            <p className="mt-5 text-sm md:text-base text-muted-foreground">{subtitle}</p>
          )}
        </>
      ) : (
        <p className="mt-4 max-w-sm font-mono text-sm text-muted-foreground">
          {phase === 'live'
            ? `The competition is live, flags are accepted for the next ${durationHours} hours.`
            : 'This edition has finished. See you next year.'}
        </p>
      )}
    </div>
  );
};

export default Countdown;

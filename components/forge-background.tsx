const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 0.73) % 6}s`,
  duration: `${5 + ((i * 1.3) % 4)}s`,
  size: 2 + (i % 3),
}))

export function ForgeBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-full">
        {EMBERS.map((ember, i) => (
          <span
            key={i}
            className="animate-ember absolute bottom-0 rounded-full bg-primary shadow-[0_0_10px_2px] shadow-primary/60"
            style={{
              left: ember.left,
              width: ember.size,
              height: ember.size,
              animationDelay: ember.delay,
              animationDuration: ember.duration,
            }}
          />
        ))}
      </div>
    </div>
  )
}

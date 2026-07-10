'use client';

/**
 * Animated floating blur orbs that drift across the background.
 * Creates a dynamic, futuristic ambient glow effect.
 */
export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary cyan orb - top left */}
      <div
        className="floating-orb floating-orb--primary"
        style={{ width: '400px', height: '400px', top: '10%', left: '5%' }}
      />
      {/* Accent pink orb - bottom right */}
      <div
        className="floating-orb floating-orb--accent"
        style={{ width: '350px', height: '350px', bottom: '15%', right: '10%' }}
      />
      {/* Purple orb - center */}
      <div
        className="floating-orb floating-orb--purple"
        style={{ width: '300px', height: '300px', top: '50%', left: '40%' }}
      />
    </div>
  );
}

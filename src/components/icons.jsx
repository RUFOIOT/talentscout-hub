/* Small inline SVG icon set — replaces emoji-as-icon usage
   (achievements, stack summit) with accessible, theme-colored marks. */

const base = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };

export function CheckIcon(props) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function LayersIcon(props) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

export function FlameIcon(props) {
  return (
    <svg {...base} {...props} fill="currentColor">
      <path d="M12 2c1 3-2 4-2 7a4 4 0 108 0c0-1-.3-2-1-3 2 1 3.5 3.5 3.5 6a6.5 6.5 0 11-13 0C7.5 8 10 6 12 2z" />
    </svg>
  );
}

export function RocketIcon(props) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 16s-1-4 3-8 9-4 9-4 1 5-4 9-8 3-8 3z" />
      <path d="M9 15l-4 4M13.5 6.5a2 2 0 102.8 2.8" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg {...base} {...props} fill="currentColor">
      <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21 7.5 13.5 2 9h7z" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function DownloadIcon(props) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
      <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </svg>
  );
}

const ICONS = { check: CheckIcon, layers: LayersIcon, flame: FlameIcon, rocket: RocketIcon };

export function BadgeIcon({ icon, ...props }) {
  const Cmp = ICONS[icon] || StarIcon;
  return <Cmp {...props} />;
}

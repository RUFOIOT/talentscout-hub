import { STACK_LAYERS } from "../data/curriculum";
import { KNOWLEDGE_BASE_URL } from "../data/links";
import { useLanguage } from "../context/LanguageContext";
import { useProgress } from "../lib/hooks";
import { stackProgressPct } from "../data/achievements";
import { StarIcon } from "../components/icons";

export default function StackPage() {
  const { lang, t } = useLanguage();
  const { progress, toggleStackLayer } = useProgress();
  const layers = progress?.stackLayers || {};
  const pct = stackProgressPct(layers);
  const allDone = pct === 100;

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <p className="text-xs uppercase tracking-widest text-mute mb-2">{t.stack.eyebrow}</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">
        {t.stack.titlePre} <span className="brand-gradient-text">{t.stack.titleWord}</span>.
      </h1>
      <p className="text-mute max-w-2xl mb-8">{t.stack.subtitle}</p>

      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-3 rounded-full bg-line overflow-hidden">
          <div className="h-full brand-gradient-bg transition-all" style={{ width: `${pct}%` }} />
        </div>
        <span className="font-display font-bold text-lg shrink-0">{pct}%</span>
      </div>

      <div className={`flex items-center justify-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest ${allDone ? "text-gold" : "text-line"}`}>
        <StarIcon width={16} height={16} />
        Capstone
      </div>

      <div className="space-y-0">
        {STACK_LAYERS.map((l, i) => {
          const done = !!layers[l.id];
          const isLast = i === STACK_LAYERS.length - 1;
          return (
            <div key={l.id} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0 pt-5">
                <span
                  className="w-4 h-4 rounded-full border-2"
                  style={{
                    background: done ? l.color : "transparent",
                    borderColor: l.color,
                  }}
                />
                {!isLast && <span className="w-0.5 flex-1 my-1" style={{ background: "var(--color-line)", minHeight: "2.5rem" }} />}
              </div>
              <label className="flex-1 flex items-start gap-4 rounded-2xl border border-line bg-white p-5 mb-4 cursor-pointer hover:border-violet transition">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={(e) => toggleStackLayer(l.id, e.target.checked)}
                  className="mt-1.5 w-5 h-5 accent-violet shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white" style={{ background: l.color }}>
                      {t.stack.layerLabel} {l.n}
                    </span>
                    <h3 className="font-display font-semibold">{l.name}</h3>
                    <span className="text-xs text-mute">· {l.sessionLabel[lang]} · {l.weight}% {t.stack.ofCapstone}</span>
                  </div>
                  <p className="text-sm text-mute mb-2">{l.desc[lang]}</p>
                  <p className="text-xs text-ink"><b>{t.stack.takeaway}</b> {l.outcome[lang]}</p>
                  <p className="text-xs text-mute mt-1"><b>{t.stack.facilitatorLooksFor}</b> {l.look[lang]}</p>
                </div>
              </label>
            </div>
          );
        })}
      </div>

      <a
        href={KNOWLEDGE_BASE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 hover:border-violet transition"
      >
        <p className="text-sm text-mute">{t.stack.kbCallout}</p>
        <span className="font-display font-semibold text-sm shrink-0">{t.stack.kbLink}</span>
      </a>
    </div>
  );
}

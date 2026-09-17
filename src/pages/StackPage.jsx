import { STACK_LAYERS } from "../data/curriculum";
import { useProgress } from "../lib/hooks";
import { stackProgressPct } from "../data/achievements";

export default function StackPage() {
  const { progress, toggleStackLayer } = useProgress();
  const layers = progress?.stackLayers || {};
  const pct = stackProgressPct(layers);

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <p className="text-xs uppercase tracking-widest text-mute mb-2">Core map</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">
        No estás aprendiendo IA. Estás construyendo un <span className="brand-gradient-text">stack</span>.
      </h1>
      <p className="text-mute max-w-2xl mb-8">
        Seis capas, construidas en orden a lo largo de ocho sesiones. Marca cada una cuando la termines — son las mismas seis que califican tu capstone.
      </p>

      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-3 rounded-full bg-line overflow-hidden">
          <div className="h-full brand-gradient-bg transition-all" style={{ width: `${pct}%` }} />
        </div>
        <span className="font-display font-bold text-lg shrink-0">{pct}%</span>
      </div>

      <div className="space-y-4">
        {STACK_LAYERS.map((l) => (
          <label
            key={l.id}
            className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 cursor-pointer hover:border-violet transition"
          >
            <input
              type="checkbox"
              checked={!!layers[l.id]}
              onChange={(e) => toggleStackLayer(l.id, e.target.checked)}
              className="mt-1.5 w-5 h-5 accent-violet shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white" style={{ background: l.color }}>
                  Capa {l.n}
                </span>
                <h3 className="font-display font-semibold">{l.name}</h3>
                <span className="text-xs text-mute">· {l.sessionLabel} · {l.weight}% del capstone</span>
              </div>
              <p className="text-sm text-mute mb-2">{l.desc}</p>
              <p className="text-xs text-ink"><b>Te llevas:</b> {l.outcome}</p>
              <p className="text-xs text-mute mt-1"><b>Qué busca el facilitador:</b> {l.look}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

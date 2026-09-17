import { useState } from "react";
import { GLOSSARY } from "../data/curriculum";

export default function GlossaryPage() {
  const [q, setQ] = useState("");
  const filtered = GLOSSARY.filter((g) =>
    g.term.toLowerCase().includes(q.toLowerCase()) || g.def.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <p className="text-xs uppercase tracking-widest text-mute mb-2">Glossary</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">El vocabulario del cohorte</h1>
      <p className="text-mute mb-6">Cada término que escucharás, en lenguaje simple, con la sesión donde se enseña.</p>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar un término…"
        className="w-full rounded-full border border-line px-4 py-2.5 mb-8 outline-none focus:border-violet focus:ring-2 focus:ring-violet/20"
      />

      <div className="space-y-3">
        {filtered.map((g) => (
          <div key={g.term} className="rounded-xl border border-line bg-white p-4">
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <h3 className="font-display font-semibold">{g.term}</h3>
              <span className="text-[10px] uppercase tracking-widest text-mute shrink-0">{g.session}</span>
            </div>
            <p className="text-sm text-mute">{g.def}</p>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-sm text-mute text-center py-10">Ningún término coincide con esa búsqueda.</p>}
      </div>
    </div>
  );
}

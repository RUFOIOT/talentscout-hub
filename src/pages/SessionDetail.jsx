import { Link, useParams, Navigate } from "react-router-dom";
import { SESSIONS } from "../data/curriculum";
import { stackLayerForSession } from "../data/curriculum";
import { useMyAttendance } from "../lib/hooks";

export default function SessionDetail() {
  const { id } = useParams();
  const session = SESSIONS.find((s) => s.id === Number(id));
  const { attendance } = useMyAttendance();
  if (!session) return <Navigate to="/hub" replace />;
  const layers = stackLayerForSession(session.id);
  const present = attendance[session.id]?.present;

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <Link to="/hub" className="text-sm text-mute hover:text-ink">← Student Hub</Link>
      <div className="flex items-center gap-3 mt-4 mb-2">
        <span className="text-[10px] uppercase tracking-widest bg-ink text-white px-2 py-1 rounded-full">{session.tag}</span>
        {present && <span className="text-[10px] uppercase tracking-widest bg-mint/20 text-ink px-2 py-1 rounded-full">Presente</span>}
      </div>
      <p className="text-xs uppercase tracking-widest text-mute mb-1">Sesión {session.id} de 8 · {session.date} · {session.time}</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-6">{session.title}</h1>

      {layers.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {layers.map((l) => (
            <span key={l.id} className="text-xs font-medium px-3 py-1.5 rounded-full text-white" style={{ background: l.color }}>
              Stack: {l.name} · {l.weight}%
            </span>
          ))}
        </div>
      )}

      <Section title="En esta sesión">
        <ul className="space-y-2">
          {session.points.map((p, i) => <li key={i} className="flex gap-2 text-sm"><span className="text-violet">—</span>{p}</li>)}
        </ul>
      </Section>

      <Section title="Trae a esta sesión">
        <ul className="space-y-2">
          {session.bring.map((p, i) => <li key={i} className="flex gap-2 text-sm"><span className="text-cyan">✓</span>{p}</li>)}
        </ul>
      </Section>

      <Section title="Tarea después">
        <ul className="space-y-2">
          {session.homework.map((p, i) => <li key={i} className="flex gap-2 text-sm"><span className="text-mint">→</span>{p}</li>)}
        </ul>
      </Section>

      {session.coreConcept && (
        <div className="mt-8 rounded-2xl border border-line bg-white p-6">
          <p className="text-xs uppercase tracking-widest text-violet font-semibold mb-2">Concepto central</p>
          <h3 className="font-display text-lg font-semibold mb-1">{session.coreConcept.title}</h3>
          <p className="text-sm text-mute">{session.coreConcept.desc}</p>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-lg font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}

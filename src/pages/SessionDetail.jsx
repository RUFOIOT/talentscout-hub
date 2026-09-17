import { Link, useParams, Navigate } from "react-router-dom";
import { SESSIONS, stackLayerForSession } from "../data/curriculum";
import { KNOWLEDGE_BASE_URL } from "../data/links";
import { useLanguage } from "../context/LanguageContext";
import { useMyAttendance } from "../lib/hooks";

export default function SessionDetail() {
  const { id } = useParams();
  const { lang, t } = useLanguage();
  const session = SESSIONS.find((s) => s.id === Number(id));
  const { attendance } = useMyAttendance();
  if (!session) return <Navigate to="/hub" replace />;
  const layers = stackLayerForSession(session.id);
  const present = attendance[session.id]?.present;

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <Link to="/hub" className="text-sm text-mute hover:text-ink">{t.session.back}</Link>
      <div className="flex items-center gap-3 mt-4 mb-2">
        <span className="text-[10px] uppercase tracking-widest bg-ink text-white px-2 py-1 rounded-full">{session.tag[lang]}</span>
        {present && <span className="text-[10px] uppercase tracking-widest bg-mint/20 text-ink px-2 py-1 rounded-full">{t.session.present}</span>}
      </div>
      <p className="text-xs uppercase tracking-widest text-mute mb-1">
        {t.session.sessionOf.replace("{n}", session.id)} · {session.date[lang]} · {session.time}
      </p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-6">{session.title[lang]}</h1>

      {layers.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {layers.map((l) => (
            <span key={l.id} className="text-xs font-medium px-3 py-1.5 rounded-full text-white" style={{ background: l.color }}>
              {t.session.stackLabel} {l.name} · {l.weight}%
            </span>
          ))}
        </div>
      )}

      <Section title={t.session.inThisSession}>
        <ul className="space-y-2">
          {session.points[lang].map((p, i) => <li key={i} className="flex gap-2 text-sm"><span className="text-violet">—</span>{p}</li>)}
        </ul>
      </Section>

      <Section title={t.session.bringToSession}>
        <ul className="space-y-2">
          {session.bring[lang].map((p, i) => <li key={i} className="flex gap-2 text-sm"><span className="text-cyan">✓</span>{p}</li>)}
        </ul>
      </Section>

      <Section title={t.session.homeworkAfter}>
        <ul className="space-y-2">
          {session.homework[lang].map((p, i) => <li key={i} className="flex gap-2 text-sm"><span className="text-mint">→</span>{p}</li>)}
        </ul>
      </Section>

      {session.coreConcept && (
        <div className="mt-8 rounded-2xl border border-line bg-white p-6">
          <p className="text-xs uppercase tracking-widest text-violet font-semibold mb-2">{t.session.coreConceptLabel}</p>
          <h3 className="font-display text-lg font-semibold mb-1">{session.coreConcept[lang].title}</h3>
          <p className="text-sm text-mute">{session.coreConcept[lang].desc}</p>
        </div>
      )}

      <a
        href={KNOWLEDGE_BASE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 hover:border-violet transition"
      >
        <div>
          <p className="font-display font-semibold">{t.session.kbLinkLabel}</p>
          <p className="text-sm text-mute mt-1">{t.session.kbLinkDesc}</p>
        </div>
      </a>
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

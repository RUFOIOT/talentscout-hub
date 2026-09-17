import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { useMyAttendance } from "../lib/hooks";
import { useProgress } from "../lib/hooks";
import { SESSIONS, COHORT } from "../data/curriculum";
import { KNOWLEDGE_BASE_URL } from "../data/links";
import { stackProgressPct } from "../data/achievements";

export default function StudentHub() {
  const { profile } = useAuth();
  const { lang, t } = useLanguage();
  const { attendance } = useMyAttendance();
  const { progress } = useProgress();
  const attendedCount = Object.values(attendance).filter((a) => a.present).length;
  const stackPct = stackProgressPct(progress?.stackLayers);
  const nextSession = SESSIONS.find((s) => !attendance[s.id]?.present) || SESSIONS[SESSIONS.length - 1];
  const nextDate = nextSession.date[lang];

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <p className="text-xs uppercase tracking-widest text-mute mb-2">Talent Scout / {COHORT.name}</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">
        {t.hub.hello}, {profile?.name?.split(" ")[0]}
      </h1>
      <p className="text-mute max-w-2xl mb-8">{t.hub.subtitle}</p>

      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <StatCard label={t.hub.statSessions} value={`${attendedCount} / 8`} accent="violet" />
        <StatCard label={t.hub.statStack} value={`${stackPct}%`} accent="cyan" />
        <StatCard label={t.hub.statNext} value={`S${nextSession.id} · ${nextDate.split(",")[1]?.trim() || nextDate}`} accent="mint" small />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <Link to="/stack" className="rounded-2xl border border-line p-6 hover:border-violet transition bg-white">
          <p className="text-xs uppercase tracking-widest text-cyan font-semibold mb-2">{t.hub.cardStackEyebrow}</p>
          <h3 className="font-display text-xl font-semibold mb-2">{t.hub.cardStackTitle}</h3>
          <p className="text-sm text-mute">{t.hub.cardStackDesc}</p>
        </Link>
        <Link to="/glossary" className="rounded-2xl border border-line p-6 hover:border-violet transition bg-white">
          <p className="text-xs uppercase tracking-widest text-violet font-semibold mb-2">{t.hub.cardGlossaryEyebrow}</p>
          <h3 className="font-display text-xl font-semibold mb-2">{t.hub.cardGlossaryTitle}</h3>
          <p className="text-sm text-mute">{t.hub.cardGlossaryDesc}</p>
        </Link>
        <a href={KNOWLEDGE_BASE_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-line p-6 hover:border-violet transition bg-white">
          <p className="text-xs uppercase tracking-widest text-mint font-semibold mb-2">{t.hub.cardKbEyebrow}</p>
          <h3 className="font-display text-xl font-semibold mb-2">{t.hub.cardKbTitle}</h3>
          <p className="text-sm text-mute">{t.hub.cardKbDesc}</p>
        </a>
      </div>

      <h2 className="font-display text-2xl font-semibold mb-1">{t.hub.allSessions}</h2>
      <p className="text-sm text-mute mb-6">{t.hub.allSessionsSub}</p>
      <div className="space-y-3">
        {SESSIONS.map((s) => (
          <Link
            key={s.id}
            to={`/sessions/${s.id}`}
            className="flex items-center gap-4 rounded-xl border border-line p-4 bg-white hover:border-violet transition"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0 ${
              attendance[s.id]?.present ? "bg-mint/30 text-ink" : "bg-paper text-mute"
            }`}>
              {String(s.id).padStart(2, "0")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-widest text-mute">{s.date[lang]} · {s.time}</p>
              <p className="font-medium truncate">{s.title[lang]}</p>
            </div>
            {attendance[s.id]?.present && (
              <span className="text-[10px] uppercase tracking-widest text-mint bg-mint/10 px-2 py-1 rounded-full shrink-0">{t.hub.present}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value, accent, small }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <p className={`font-display font-bold ${small ? "text-lg" : "text-3xl"}`} style={{ color: `var(--color-${accent})` }}>{value}</p>
      <p className="text-xs text-mute mt-1">{label}</p>
    </div>
  );
}

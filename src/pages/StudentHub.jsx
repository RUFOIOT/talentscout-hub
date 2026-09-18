import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { useMyAttendance } from "../lib/hooks";
import { useProgress } from "../lib/hooks";
import { SESSIONS, COHORT } from "../data/curriculum";
import { KNOWLEDGE_BASE_URL } from "../data/links";
import { stackProgressPct, currentStreak } from "../data/achievements";
import { LayersIcon, CheckIcon, FlameIcon } from "../components/icons";

export default function StudentHub() {
  const { profile } = useAuth();
  const { lang, t } = useLanguage();
  const { attendance } = useMyAttendance();
  const { progress } = useProgress();
  const attendedCount = Object.values(attendance).filter((a) => a.present).length;
  const stackPct = stackProgressPct(progress?.stackLayers);
  const streak = currentStreak(attendance);
  const nextSession = SESSIONS.find((s) => !attendance[s.id]?.present) || SESSIONS[SESSIONS.length - 1];
  const nextDate = nextSession.date[lang];

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <p className="text-xs uppercase tracking-widest text-mute mb-2">Talent Scout / {COHORT.name}</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">
        {t.hub.hello}, {profile?.name?.split(" ")[0]}
      </h1>
      <p className="text-mute max-w-2xl mb-8">{t.hub.subtitle}</p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-6 rounded-2xl border border-line bg-white p-5">
        <StackRing pct={stackPct} label={t.hub.statStack} />
        <div className="flex-1 min-w-[180px]">
          <p className="text-xs text-mute mb-2">{t.hub.attendanceLabel} — {attendedCount} / 8</p>
          <div className="flex gap-1.5">
            {SESSIONS.map((s) => (
              <span
                key={s.id}
                title={s.title[lang]}
                className={`w-3 h-3 rounded-sm ${attendance[s.id]?.present ? "bg-mint" : "bg-line"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-line px-4 py-2 shrink-0 self-start sm:self-center">
          <FlameIcon width={16} height={16} className={streak > 0 ? "text-gold" : "text-line"} />
          <span className="text-sm font-semibold">{streak}</span>
          <span className="text-xs text-mute">{t.hub.streakSessions} · {t.hub.statStreak.toLowerCase()}</span>
        </div>
        <div className="rounded-xl bg-paper px-4 py-2.5 shrink-0">
          <p className="text-[10px] uppercase tracking-widest text-mute">{t.hub.statNext}</p>
          <p className="font-display font-bold">S{nextSession.id} · {nextDate.split(",")[1]?.trim() || nextDate}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <Link to="/stack" className="rounded-2xl border border-line p-6 hover:border-violet transition bg-white">
          <LayersIcon width={20} height={20} className="text-cyan mb-3" />
          <p className="text-xs uppercase tracking-widest text-cyan font-semibold mb-2">{t.hub.cardStackEyebrow}</p>
          <h3 className="font-display text-xl font-semibold mb-2">{t.hub.cardStackTitle}</h3>
          <p className="text-sm text-mute">{t.hub.cardStackDesc}</p>
        </Link>
        <Link to="/glossary" className="rounded-2xl border border-line p-6 hover:border-violet transition bg-white">
          <CheckIcon width={20} height={20} className="text-violet mb-3" />
          <p className="text-xs uppercase tracking-widest text-violet font-semibold mb-2">{t.hub.cardGlossaryEyebrow}</p>
          <h3 className="font-display text-xl font-semibold mb-2">{t.hub.cardGlossaryTitle}</h3>
          <p className="text-sm text-mute">{t.hub.cardGlossaryDesc}</p>
        </Link>
        <a href={KNOWLEDGE_BASE_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-line p-6 hover:border-violet transition bg-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-mint mb-3">
            <path d="M3 7h5l2 2h11v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" strokeLinejoin="round" />
          </svg>
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

function StackRing({ pct, label }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <div className="flex items-center gap-3 shrink-0">
      <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="var(--color-line)" strokeWidth="6" />
        <circle
          cx="32" cy="32" r={r} fill="none" stroke="var(--color-cyan)" strokeWidth="6"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset .4s ease" }}
        />
      </svg>
      <div className="-ml-[52px] w-16 text-center font-display font-bold text-sm">{pct}%</div>
      <p className="text-xs text-mute max-w-[7rem]">{label}</p>
    </div>
  );
}

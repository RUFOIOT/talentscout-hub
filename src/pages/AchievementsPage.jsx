import { Link } from "react-router-dom";
import { useMyAttendance, useProgress } from "../lib/hooks";
import { ALL_BADGES, computeAchievements, certificateEligible } from "../data/achievements";
import { useLanguage } from "../context/LanguageContext";

const ICONS = {
  check: "✓", layers: "▤", flame: "🔥", rocket: "🚀",
};

export default function AchievementsPage() {
  const { lang, t } = useLanguage();
  const { attendance } = useMyAttendance();
  const { progress } = useProgress();
  const unlocked = computeAchievements({ attendance, stackLayers: progress?.stackLayers });
  const eligible = certificateEligible({ attendance, stackLayers: progress?.stackLayers });

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <p className="text-xs uppercase tracking-widest text-mute mb-2">{t.achievements.eyebrow}</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">{t.achievements.title}</h1>
      <p className="text-mute mb-8">{t.achievements.subtitle}</p>

      {eligible ? (
        <Link to="/certificate" className="block rounded-2xl brand-gradient-bg p-6 mb-10 text-ink">
          <p className="font-display text-xl font-semibold mb-1">{t.achievements.certReady}</p>
          <p className="text-sm">{t.achievements.certReadyDesc}</p>
        </Link>
      ) : (
        <div className="rounded-2xl border border-line bg-white p-6 mb-10">
          <p className="font-display text-lg font-semibold mb-1">{t.achievements.certLocked}</p>
          <p className="text-sm text-mute">{t.achievements.certLockedDesc}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ALL_BADGES.map((b) => {
          const on = unlocked.has(b.id);
          return (
            <div
              key={b.id}
              className={`rounded-2xl border p-5 text-center transition ${
                on ? "border-violet bg-white shadow-lg shadow-violet/10" : "border-line bg-paper opacity-60"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl ${
                  on ? "brand-gradient-bg" : "bg-line"
                }`}
              >
                {ICONS[b.icon] || "★"}
              </div>
              <p className="font-display font-semibold text-sm mb-1">{b.title[lang]}</p>
              <p className="text-xs text-mute">{b.desc[lang]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

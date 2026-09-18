import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { useMyAttendance, useProgress } from "../lib/hooks";
import { certificateEligible } from "../data/achievements";
import { COHORT } from "../data/curriculum";
import logo from "../logo-vibramente.jpg";

export default function CertificatePage() {
  const { profile } = useAuth();
  const { lang, t } = useLanguage();
  const { attendance } = useMyAttendance();
  const { progress } = useProgress();
  const eligible = certificateEligible({ attendance, stackLayers: progress?.stackLayers });

  if (!eligible) return <Navigate to="/achievements" replace />;

  const dateStr = new Date().toLocaleDateString(lang === "en" ? "en-US" : "es-EC", { day: "numeric", month: "long", year: "numeric" });

  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://talentscout-hub.netlify.app/")}`;

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="no-print flex justify-end gap-3 mb-4">
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-line text-sm font-semibold hover:border-violet transition"
        >
          {t.certificate.shareLinkedIn}
        </a>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-full brand-gradient-bg text-ink text-sm font-semibold"
        >
          {t.certificate.printBtn}
        </button>
      </div>

      <div className="rounded-2xl border-4 border-double p-10 md:p-14 text-center bg-white" style={{ borderColor: "#7C5CFF" }}>
        <div className="inline-block bg-ink rounded-lg p-2 mb-8">
          <img src={logo} alt="Vibramente" className="h-14 mx-auto rounded" />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-mute mb-6">{t.certificate.certTitle}</p>
        <p className="text-sm text-mute mb-2">{t.certificate.grantedTo}</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">{profile?.name}</h1>
        <p className="text-sm text-mute max-w-lg mx-auto leading-relaxed mb-8">
          {t.certificate.bodyPre} <b>{COHORT.name}</b>{t.certificate.bodyPost}
        </p>
        <div className="flex justify-center gap-16 text-sm">
          <div>
            <p className="font-display font-semibold border-t border-line pt-2 mt-8 min-w-[160px]">{COHORT.facilitator}</p>
            <p className="text-xs text-mute">{t.certificate.facilitatorLabel}</p>
          </div>
          <div>
            <p className="font-display font-semibold border-t border-line pt-2 mt-8 min-w-[160px]">{dateStr}</p>
            <p className="text-xs text-mute">{t.certificate.dateLabel}</p>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-mute mt-10">{t.certificate.footer}</p>
      </div>
    </div>
  );
}

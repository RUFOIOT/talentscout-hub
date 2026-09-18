import { useRoster, useCohortAttendance, useAllProgress } from "../../lib/hooks";
import { SESSIONS } from "../../data/curriculum";
import { stackProgressPct, certificateEligible } from "../../data/achievements";
import { useLanguage } from "../../context/LanguageContext";
import { SkeletonRow } from "../../components/Skeleton";
import { DownloadIcon } from "../../components/icons";

export default function Roster() {
  const { t } = useLanguage();
  const { roster, loading } = useRoster();
  const students = roster.filter((r) => r.role === "student");
  const { attendance } = useCohortAttendance();
  const uids = students.map((s) => s.uid);
  const progressByUid = useAllProgress(uids);

  const attByUid = {};
  attendance.forEach((a) => {
    attByUid[a.uid] = attByUid[a.uid] || {};
    attByUid[a.uid][a.sessionId] = a;
  });

  function exportCsv() {
    const header = ["Name", "Email", ...SESSIONS.map((s) => `S${s.id}`), "Stack %", "Certificate"];
    const rows = students.map((st) => {
      const att = attByUid[st.uid] || {};
      const prog = progressByUid[st.uid];
      const pct = stackProgressPct(prog?.stackLayers);
      const eligible = certificateEligible({ attendance: att, stackLayers: prog?.stackLayers });
      return [
        st.name, st.email,
        ...SESSIONS.map((s) => (att[s.id]?.present ? "present" : "absent")),
        `${pct}%`, eligible ? "eligible" : "not yet",
      ];
    });
    const csv = [header, ...rows]
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "talent-scout-roster.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="flex items-start justify-between gap-4 mb-2">
        <p className="text-xs uppercase tracking-widest text-mute">{t.facRoster.eyebrow}</p>
        {!loading && students.length > 0 && (
          <button
            onClick={exportCsv}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-line hover:border-violet transition shrink-0"
          >
            <DownloadIcon width={14} height={14} />
            {t.facRoster.exportCsv}
          </button>
        )}
      </div>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">{t.facRoster.title}</h1>
      <p className="text-mute mb-8">{students.length} {t.facRoster.subtitleEnrolled}</p>

      {loading && (
        <div className="space-y-2 mb-4">
          <SkeletonRow /><SkeletonRow /><SkeletonRow />
        </div>
      )}
      {!loading && students.length === 0 && (
        <p className="text-sm text-mute">{t.facRoster.noStudents}</p>
      )}

      <div className="overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full text-sm min-w-[720px]">
          <thead>
            <tr className="border-b border-line text-left text-xs uppercase tracking-widest text-mute">
              <th className="px-4 py-3">{t.facRoster.colStudent}</th>
              {SESSIONS.map((s) => <th key={s.id} className="px-2 py-3 text-center">S{s.id}</th>)}
              <th className="px-4 py-3 text-center">{t.facRoster.colStack}</th>
              <th className="px-4 py-3 text-center">{t.facRoster.colCertificate}</th>
            </tr>
          </thead>
          <tbody>
            {students.map((st) => {
              const att = attByUid[st.uid] || {};
              const prog = progressByUid[st.uid];
              const pct = stackProgressPct(prog?.stackLayers);
              const eligible = certificateEligible({ attendance: att, stackLayers: prog?.stackLayers });
              return (
                <tr key={st.uid} className="border-b border-line last:border-0">
                  <td className="px-4 py-3">
                    <p className="font-medium">{st.name}</p>
                    <p className="text-xs text-mute">{st.email}</p>
                  </td>
                  {SESSIONS.map((s) => (
                    <td key={s.id} className="px-2 py-3 text-center">
                      {att[s.id]?.present ? <span className="text-mint">●</span> : <span className="text-line">○</span>}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-center font-medium">{pct}%</td>
                  <td className="px-4 py-3 text-center">{eligible ? "🎓" : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

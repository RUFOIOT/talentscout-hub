import { useRoster, useCohortAttendance, useAllProgress } from "../../lib/hooks";
import { SESSIONS } from "../../data/curriculum";
import { stackProgressPct, certificateEligible } from "../../data/achievements";

export default function Roster() {
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

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <p className="text-xs uppercase tracking-widest text-mute mb-2">Facilitator</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">Roster del cohorte</h1>
      <p className="text-mute mb-8">{students.length} estudiante{students.length === 1 ? "" : "s"} inscritos. Progreso en vivo.</p>

      {loading && <p className="text-sm text-mute">Cargando…</p>}
      {!loading && students.length === 0 && (
        <p className="text-sm text-mute">Todavía no hay estudiantes registrados con el código de este cohorte.</p>
      )}

      <div className="overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full text-sm min-w-[720px]">
          <thead>
            <tr className="border-b border-line text-left text-xs uppercase tracking-widest text-mute">
              <th className="px-4 py-3">Estudiante</th>
              {SESSIONS.map((s) => <th key={s.id} className="px-2 py-3 text-center">S{s.id}</th>)}
              <th className="px-4 py-3 text-center">Stack</th>
              <th className="px-4 py-3 text-center">Certificado</th>
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

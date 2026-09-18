import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import { useRoster, useCohortAttendance } from "../../lib/hooks";
import { SESSIONS } from "../../data/curriculum";

export default function Attendance() {
  const { user } = useAuth();
  const { lang, t } = useLanguage();
  const { roster } = useRoster();
  const students = roster.filter((r) => r.role === "student");
  const { attendance, markAttendance } = useCohortAttendance();
  const [sessionId, setSessionId] = useState(1);

  const forSession = {};
  attendance.filter((a) => a.sessionId === sessionId).forEach((a) => { forSession[a.uid] = a; });

  async function setPresent(uid, present) {
    const current = forSession[uid];
    await markAttendance({ sessionId, uid, present, participation: current?.participation ?? 3, notes: current?.notes || "", markedBy: user.uid });
  }
  async function setParticipation(uid, participation) {
    const current = forSession[uid];
    await markAttendance({ sessionId, uid, present: current?.present ?? true, participation, notes: current?.notes || "", markedBy: user.uid });
  }

  const session = SESSIONS.find((s) => s.id === sessionId);

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <p className="text-xs uppercase tracking-widest text-mute mb-2">{t.facAttendance.eyebrow}</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-6">{t.facAttendance.title}</h1>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {SESSIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSessionId(s.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap ${
              sessionId === s.id ? "bg-ink text-white" : "bg-white border border-line text-mute"
            }`}
          >
            {t.facAttendance.sessionBtn} {s.id}
          </button>
        ))}
      </div>

      <p className="text-sm text-mute mb-6">{session.title[lang]} · {session.date[lang]}</p>

      <div className="space-y-2">
        {students.map((st) => {
          const rec = forSession[st.uid];
          const present = rec?.present ?? false;
          const participation = rec?.participation ?? 3;
          return (
            <div key={st.uid} className="flex items-center gap-4 rounded-xl border border-line bg-white p-4">
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{st.name}</p>
                <p className="text-xs text-mute truncate">{st.email}</p>
              </div>
              <button
                onClick={() => setPresent(st.uid, !present)}
                aria-pressed={present}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 ${
                  present ? "bg-mint/20 text-ink" : "bg-paper border border-line text-mute"
                }`}
              >
                {present ? t.facAttendance.present : t.facAttendance.absent}
              </button>
              <div className="flex items-center gap-1 shrink-0">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setParticipation(st.uid, n)}
                    className={`w-6 h-6 rounded text-[10px] font-bold ${
                      n <= participation ? "brand-gradient-bg text-ink" : "bg-line text-mute"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
        {students.length === 0 && <p className="text-sm text-mute">{t.facAttendance.noStudents}</p>}
      </div>
    </div>
  );
}

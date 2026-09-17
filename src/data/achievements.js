import { SESSIONS, STACK_LAYERS } from "./curriculum";

export const SESSION_BADGES = SESSIONS.map((s) => ({
  id: `session-${s.id}`,
  title: `Sesión ${s.id} completa`,
  desc: s.title,
  icon: "check",
}));

export const SPECIAL_BADGES = [
  { id: "stack-complete", title: "Stack completo", desc: "Las 6 capas del Operator Stack marcadas.", icon: "layers" },
  { id: "perfect-streak", title: "Racha perfecta", desc: "Asististe a las 8 sesiones del cohorte.", icon: "flame" },
  { id: "capstone-shipped", title: "Capstone entregado", desc: "Demo en vivo de la Sesión 8 completada.", icon: "rocket" },
];

export const ALL_BADGES = [...SESSION_BADGES, ...SPECIAL_BADGES];

export function computeAchievements({ attendance, stackLayers }) {
  const unlocked = new Set();
  const presentIds = new Set(
    Object.entries(attendance || {})
      .filter(([, v]) => v && v.present)
      .map(([sessionId]) => Number(sessionId))
  );
  SESSIONS.forEach((s) => { if (presentIds.has(s.id)) unlocked.add(`session-${s.id}`); });

  const stackDone = STACK_LAYERS.every((l) => stackLayers && stackLayers[l.id]);
  if (stackDone) unlocked.add("stack-complete");

  if (SESSIONS.every((s) => presentIds.has(s.id))) unlocked.add("perfect-streak");

  if (presentIds.has(8)) unlocked.add("capstone-shipped");

  return unlocked;
}

export function certificateEligible({ attendance, stackLayers }) {
  const present8 = !!(attendance && attendance[8] && attendance[8].present);
  const stackDone = STACK_LAYERS.every((l) => stackLayers && stackLayers[l.id]);
  return present8 && stackDone;
}

export function stackProgressPct(stackLayers) {
  const done = STACK_LAYERS.filter((l) => stackLayers && stackLayers[l.id]).length;
  return Math.round((done / STACK_LAYERS.length) * 100);
}

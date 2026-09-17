import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAnnouncements } from "../lib/hooks";

export default function AnnouncementsPage() {
  const { profile, user } = useAuth();
  const { posts, loading, publish } = useAnnouncements();
  const [form, setForm] = useState({ title: "", body: "" });
  const [busy, setBusy] = useState(false);
  const isFacilitator = profile?.role === "facilitator";

  const submit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.body.trim()) return;
    setBusy(true);
    try {
      await publish({ title: form.title.trim(), body: form.body.trim(), authorUid: user.uid });
      setForm({ title: "", body: "" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-5 py-10">
      <p className="text-xs uppercase tracking-widest text-mute mb-2">Announcements</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">Novedades del cohorte</h1>
      <p className="text-mute mb-8">Avisos y recordatorios de {profile?.role === "facilitator" ? "tu equipo" : "tu facilitador"}.</p>

      {isFacilitator && (
        <form onSubmit={submit} className="rounded-2xl border border-line bg-white p-5 mb-10 space-y-3">
          <p className="font-display font-semibold text-sm">Publicar un aviso</p>
          <input
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="Título"
            className="w-full rounded-lg border border-line px-3 py-2 outline-none focus:border-violet"
          />
          <textarea
            value={form.body}
            onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
            placeholder="Mensaje para el cohorte…"
            rows={3}
            className="w-full rounded-lg border border-line px-3 py-2 outline-none focus:border-violet"
          />
          <button disabled={busy} className="px-4 py-2 rounded-full brand-gradient-bg text-ink text-sm font-semibold disabled:opacity-60">
            {busy ? "Publicando…" : "Publicar"}
          </button>
        </form>
      )}

      {loading && <p className="text-sm text-mute">Cargando…</p>}
      {!loading && posts.length === 0 && <p className="text-sm text-mute">Todavía no hay avisos.</p>}
      <div className="space-y-4">
        {posts.map((p) => (
          <div key={p.id} className="rounded-xl border border-line bg-white p-5">
            <p className="text-[10px] uppercase tracking-widest text-mute mb-1">
              {new Date(p.publishedAt).toLocaleDateString("es-EC", { day: "numeric", month: "long", year: "numeric" })}
            </p>
            <h3 className="font-display font-semibold mb-1">{p.title}</h3>
            <p className="text-sm text-mute whitespace-pre-wrap">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

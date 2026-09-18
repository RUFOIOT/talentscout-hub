import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { useAnnouncements } from "../lib/hooks";
import { SkeletonCard } from "../components/Skeleton";

export default function AnnouncementsPage() {
  const { profile, user } = useAuth();
  const { lang, t } = useLanguage();
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
      <p className="text-xs uppercase tracking-widest text-mute mb-2">{t.announcements.eyebrow}</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">{t.announcements.title}</h1>
      <p className="text-mute mb-8">
        {t.announcements.subtitlePre} {isFacilitator ? t.announcements.subtitleFacWho : t.announcements.subtitleStuWho}.
      </p>

      {isFacilitator && (
        <form onSubmit={submit} className="rounded-2xl border border-line bg-white p-5 mb-10 space-y-3">
          <p className="font-display font-semibold text-sm">{t.announcements.postTitle}</p>
          <input
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder={t.announcements.titlePlaceholder}
            className="w-full rounded-lg border border-line px-3 py-2 outline-none focus:border-violet"
          />
          <textarea
            value={form.body}
            onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
            placeholder={t.announcements.bodyPlaceholder}
            rows={3}
            className="w-full rounded-lg border border-line px-3 py-2 outline-none focus:border-violet"
          />
          <button disabled={busy} className="px-4 py-2 rounded-full brand-gradient-bg text-ink text-sm font-semibold disabled:opacity-60">
            {busy ? t.announcements.publishing : t.announcements.publish}
          </button>
        </form>
      )}

      {loading && <div className="space-y-3 mb-4"><SkeletonCard /><SkeletonCard /></div>}
      {!loading && posts.length === 0 && <p className="text-sm text-mute">{t.announcements.none}</p>}
      <div className="space-y-4">
        {posts.map((p) => (
          <div key={p.id} className="rounded-xl border border-line bg-white p-5">
            <p className="text-[10px] uppercase tracking-widest text-mute mb-1">
              {new Date(p.publishedAt).toLocaleDateString(lang === "en" ? "en-US" : "es-EC", { day: "numeric", month: "long", year: "numeric" })}
            </p>
            <h3 className="font-display font-semibold mb-1">{p.title}</h3>
            <p className="text-sm text-mute whitespace-pre-wrap">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

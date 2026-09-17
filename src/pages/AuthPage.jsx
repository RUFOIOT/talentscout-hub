import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import logo from "../logo-vibramente.jpg";

export default function AuthPage() {
  const { user, profile, loading, signup, login } = useAuth();
  const { lang, setLang, t } = useLanguage();
  const [mode, setMode] = useState("login"); // login | signup
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({ name: "", email: "", password: "", code: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  if (!loading && user && profile) {
    return <Navigate to={profile.role === "facilitator" ? "/facilitator" : "/hub"} replace />;
  }

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setErr(""); setBusy(true);
    try {
      if (mode === "signup") {
        await signup({ name: form.name, email: form.email, password: form.password, code: form.code, role });
      } else {
        await login({ email: form.email, password: form.password });
      }
    } catch (e2) {
      setErr(humanizeError(e2, t.auth));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Vibramente" className="h-28 w-auto rounded-lg" />
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex items-center rounded-full bg-white/10 p-0.5 text-[11px] font-semibold">
            <button type="button" onClick={() => setLang("es")} className={`px-3 py-1 rounded-full transition ${lang === "es" ? "bg-white text-ink" : "text-white/70"}`}>ES</button>
            <button type="button" onClick={() => setLang("en")} className={`px-3 py-1 rounded-full transition ${lang === "en" ? "bg-white text-ink" : "text-white/70"}`}>EN</button>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-violet/10">
          <div className="flex gap-1 bg-paper rounded-full p-1 mb-6">
            {["login", "signup"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => { setMode(m); setErr(""); }}
                className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
                  mode === m ? "bg-ink text-white" : "text-mute"
                }`}
              >
                {m === "login" ? t.auth.tabLogin : t.auth.tabSignup}
              </button>
            ))}
          </div>

          <h1 className="font-display text-2xl font-semibold mb-1">
            {mode === "login" ? t.auth.welcomeBack : t.auth.joinCohort}
          </h1>
          <p className="text-sm text-mute mb-6">
            {mode === "login" ? "Talent Scout — AI Marketing-Operator Cohort" : t.auth.subtitleSignup}
          </p>

          <form onSubmit={submit} className="space-y-4">
            {mode === "signup" && (
              <div className="flex gap-2 mb-1">
                {["student", "facilitator"].map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => setRole(r)}
                    className={`flex-1 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide border ${
                      role === r ? "border-violet bg-violet/10 text-violet" : "border-line text-mute"
                    }`}
                  >
                    {r === "student" ? t.auth.roleStudent : t.auth.roleFacilitator}
                  </button>
                ))}
              </div>
            )}
            {mode === "signup" && (
              <Field label={t.auth.fieldName} value={form.name} onChange={set("name")} placeholder={t.auth.fieldNamePlaceholder} required />
            )}
            <Field label={t.auth.fieldEmail} type="email" value={form.email} onChange={set("email")} placeholder="tu@email.com" required />
            <Field label={t.auth.fieldPassword} type="password" value={form.password} onChange={set("password")} placeholder={t.auth.fieldPasswordPlaceholder} required minLength={6} />
            {mode === "signup" && (
              <Field label={t.auth.fieldCode} value={form.code} onChange={set("code")} placeholder={t.auth.fieldCodePlaceholder} required uppercase />
            )}

            {err && <p className="text-sm text-rose bg-rose/5 border border-rose/20 rounded-lg px-3 py-2">{err}</p>}

            <button
              type="submit"
              disabled={busy}
              className="w-full py-3 rounded-lg brand-gradient-bg text-ink font-semibold disabled:opacity-60"
            >
              {busy ? t.auth.busy : mode === "login" ? t.auth.submitLogin : t.auth.submitSignup}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, uppercase, ...props }) {
  return (
    <label className="block text-sm">
      <span className="text-mute font-medium">{label}</span>
      <input
        {...props}
        onChange={(e) => { if (uppercase) e.target.value = e.target.value.toUpperCase(); props.onChange(e); }}
        className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 outline-none focus:border-violet focus:ring-2 focus:ring-violet/20"
      />
    </label>
  );
}

function humanizeError(e, at) {
  const msg = String(e?.message || e);
  if (msg.includes("auth/email-already-in-use")) return at.errEmailInUse;
  if (msg.includes("auth/invalid-credential") || msg.includes("auth/wrong-password")) return at.errWrongCreds;
  if (msg.includes("auth/weak-password")) return at.errWeakPassword;
  if (msg.includes("auth/user-not-found")) return at.errUserNotFound;
  if (msg.includes("auth/invalid-cohort-code")) return at.errInvalidCode;
  return at.errGeneric;
}

import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import logo from "../logo-vibramente.jpg";

export default function Layout({ children }) {
  const { profile, logout } = useAuth();
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();

  const studentNav = [
    { to: "/hub", label: t.nav.hub },
    { to: "/stack", label: t.nav.stack },
    { to: "/glossary", label: t.nav.glossary },
    { to: "/achievements", label: t.nav.achievements },
    { to: "/announcements", label: t.nav.announcements },
  ];
  const facilitatorNav = [
    { to: "/facilitator", label: t.nav.facRoster },
    { to: "/facilitator/attendance", label: t.nav.facAttendance },
    { to: "/facilitator/announcements", label: t.nav.facAnnouncements },
  ];
  const nav = profile?.role === "facilitator" ? facilitatorNav : studentNav;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="no-print sticky top-0 z-40 bg-ink">
        <div className="max-w-6xl mx-auto px-5 py-2.5 flex items-center justify-between gap-4">
          <Link to={profile?.role === "facilitator" ? "/facilitator" : "/hub"} className="shrink-0">
            <img src={logo} alt="Vibramente" className="h-14 w-auto rounded" />
          </Link>
          <nav className="hidden md:flex items-center gap-1 flex-wrap">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/facilitator"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition ${
                    isActive ? "bg-white text-ink" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {profile?.role === "facilitator" && (
              <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-white/50">{t.layout.facilitatorBadge}</span>
            )}
            <span className="hidden sm:inline text-sm text-white/80">{profile?.name}</span>
            <div className="flex items-center rounded-full bg-white/10 p-0.5 text-[11px] font-semibold">
              <button
                onClick={() => setLang("es")}
                aria-pressed={lang === "es"}
                className={`px-2 py-1 rounded-full transition ${lang === "es" ? "bg-white text-ink" : "text-white/70"}`}
              >ES</button>
              <button
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`px-2 py-1 rounded-full transition ${lang === "en" ? "bg-white text-ink" : "text-white/70"}`}
              >EN</button>
            </div>
            <button
              onClick={async () => { await logout(); navigate("/"); }}
              className="text-xs text-white/60 hover:text-white underline underline-offset-2"
            >
              {t.layout.logout}
            </button>
          </div>
        </div>
        <nav className="md:hidden flex gap-1 overflow-x-auto px-5 pb-3">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/facilitator"}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
                  isActive ? "bg-white text-ink" : "text-white/70"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1 bg-paper">{children}</main>
    </div>
  );
}

import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../logo-horizontal.png";

const studentNav = [
  { to: "/hub", label: "Student Hub" },
  { to: "/stack", label: "My Stack" },
  { to: "/glossary", label: "Glossary" },
  { to: "/achievements", label: "Achievements" },
  { to: "/announcements", label: "Announcements" },
];
const facilitatorNav = [
  { to: "/facilitator", label: "Roster" },
  { to: "/facilitator/attendance", label: "Attendance" },
  { to: "/facilitator/announcements", label: "Announcements" },
];

export default function Layout({ children }) {
  const { profile, logout } = useAuth();
  const navigate = useNavigate();
  const nav = profile?.role === "facilitator" ? facilitatorNav : studentNav;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="no-print sticky top-0 z-40 bg-ink">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <Link to={profile?.role === "facilitator" ? "/facilitator" : "/hub"}>
            <img src={logo} alt="Vibramente — Talent Scout" className="h-9 w-auto" />
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
              <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-white/50">Facilitador</span>
            )}
            <span className="hidden sm:inline text-sm text-white/80">{profile?.name}</span>
            <button
              onClick={async () => { await logout(); navigate("/"); }}
              className="text-xs text-white/60 hover:text-white underline underline-offset-2"
            >
              Salir
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

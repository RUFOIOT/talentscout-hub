import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useMyAttendance, useProgress } from "../lib/hooks";
import { certificateEligible } from "../data/achievements";
import { COHORT } from "../data/curriculum";
import logo from "../logo-horizontal.png";

export default function CertificatePage() {
  const { profile } = useAuth();
  const { attendance } = useMyAttendance();
  const { progress } = useProgress();
  const eligible = certificateEligible({ attendance, stackLayers: progress?.stackLayers });

  if (!eligible) return <Navigate to="/achievements" replace />;

  const dateStr = new Date().toLocaleDateString("es-EC", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="no-print flex justify-end mb-4">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-full brand-gradient-bg text-ink text-sm font-semibold"
        >
          Descargar / Imprimir PDF
        </button>
      </div>

      <div className="rounded-2xl border-4 border-double p-10 md:p-14 text-center bg-white" style={{ borderColor: "#7C5CFF" }}>
        <img src={logo} alt="Vibramente" className="h-10 mx-auto mb-8" style={{ filter: "invert(0)" }} />
        <p className="text-xs uppercase tracking-[0.3em] text-mute mb-6">Certificado de Finalización</p>
        <p className="text-sm text-mute mb-2">Se otorga a</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">{profile?.name}</h1>
        <p className="text-sm text-mute max-w-lg mx-auto leading-relaxed mb-8">
          por completar exitosamente el <b>{COHORT.name}</b>, construyendo un agente de IA de principio a fin
          a lo largo de ocho sesiones y demostrando las seis capas del Operator Stack —
          Identity, Knowledge, Specification, Tools &amp; MCP, Automation y Governance.
        </p>
        <div className="flex justify-center gap-16 text-sm">
          <div>
            <p className="font-display font-semibold border-t border-line pt-2 mt-8 min-w-[160px]">{COHORT.facilitator}</p>
            <p className="text-xs text-mute">Facilitador</p>
          </div>
          <div>
            <p className="font-display font-semibold border-t border-line pt-2 mt-8 min-w-[160px]">{dateStr}</p>
            <p className="text-xs text-mute">Fecha</p>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-mute mt-10">Vibramente — School-Lab of Agentic Intelligence</p>
      </div>
    </div>
  );
}

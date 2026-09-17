/* ============================================================
   Talent Scout — Cohort Hub
   Contenido real portado desde talenscoutcohortforstudents.netlify.app
   (Student Hub + /showcase + /resources/stack). Contenido propio de
   Vibramente, movido a su propio producto nuevo. Bilingüe EN/ES —
   cada campo de texto es { en, es }; los campos que no dependen del
   idioma (id, session, weight, color, time, n) quedan planos.
   ============================================================ */

export const COHORT = {
  name: "Talent Scout — AI Marketing-Operator Cohort",
  runs: "Sep 1 – Sep 24, 2026",
  rhythm: "Tue & Thu, 4–6 PM ET",
  facilitator: "Felipe Salgado",
  operations: "Maria Villamil",
};

export const STACK_LAYERS = [
  { id: "identity", n: "01", name: "Identity", color: "#4F46E5", session: 1, sessionLabel: { en: "Session 1", es: "Sesión 1" }, weight: 20,
    desc: { en: "Who the agent is and what it owes you. Written once as a system instruction, loaded into every conversation after.",
            es: "Quién es el agente y qué te debe. Se escribe una vez como system instruction y se carga en cada conversación después." },
    outcome: { en: "A Single Agent Goal Brief and a system instruction saved in your workspace.",
               es: "Un Single Agent Goal Brief y un system instruction guardados en tu workspace." },
    look: { en: "A role with real seniority, and a stated uncertainty rule — not a personality description.",
            es: "Un rol con seniority real, y una regla explícita para la incertidumbre — no una descripción de personalidad." } },
  { id: "knowledge", n: "02", name: "Knowledge", color: "#0D9488", session: 2, sessionLabel: { en: "Session 2", es: "Sesión 2" }, weight: 15,
    desc: { en: "What the agent knows that a blank model does not. Brand, ICP, past work, the things it must never say.",
            es: "Lo que el agente sabe que un modelo en blanco no sabe. Marca, ICP, trabajo previo, las cosas que nunca debe decir." },
    outcome: { en: "A populated Knowledge Base in your Obsidian vault, wired to the workspace.",
               es: "Un Knowledge Base poblado en tu Obsidian vault, conectado al workspace." },
    look: { en: "Real brand context, not placeholders. Freshness and structure over volume.",
            es: "Contexto de marca real, no placeholders. Frescura y estructura por encima de volumen." } },
  { id: "specification", n: "03", name: "Specification", color: "#EA580C", session: 4, sessionLabel: { en: "Sessions 3–4", es: "Sesiones 3–4" }, weight: 20,
    desc: { en: "The job, written so precisely that the output needs no editing. This is RCTFX doing its work.",
            es: "El encargo, escrito con tanta precisión que el resultado no necesita edición. Aquí es donde RCTFX hace su trabajo." },
    outcome: { en: "A full Agent Brief: role, context, task, input, output, governance, hours saved per week.",
               es: "Un Agent Brief completo: rol, contexto, tarea, entrada, salida, gobernanza, horas ahorradas por semana." },
    look: { en: "A Format layer specific enough that two runs produce the same shape.",
            es: "Una capa de Format lo bastante específica como para que dos corridas produzcan el mismo formato de salida." } },
  { id: "toolsMcp", n: "04", name: "Tools & MCP", color: "#0284C7", session: 5, sessionLabel: { en: "Session 5", es: "Sesión 5" }, weight: 15,
    desc: { en: "The reach. Connectors that let the agent read and write in the systems where your work actually lives.",
            es: "El alcance. Conectores que le permiten al agente leer y escribir en los sistemas donde realmente vive tu trabajo." },
    outcome: { en: "At least one MCP connector authorized, scoped, and verified with a live command.",
               es: "Al menos un conector MCP autorizado, delimitado en su alcance, y verificado con un comando en vivo." },
    look: { en: "Scope matched to the task. An over-permissioned connector loses points, not gains them.",
            es: "Un alcance ajustado a la tarea. Un conector con permisos de más resta puntos, no suma." } },
  { id: "automation", n: "05", name: "Automation", color: "#E11D48", session: 5, sessionLabel: { en: "Session 5", es: "Sesión 5" }, weight: 15,
    desc: { en: "The part that removes you. A trigger — time-based or event-based — that runs the work while you are elsewhere.",
            es: "La parte que te quita a ti de en medio. Un trigger — por tiempo o por evento — que corre el trabajo mientras estás en otra parte." },
    outcome: { en: "One working trigger, with its schedule and delivery channel defined.",
               es: "Un trigger funcionando, con su horario y canal de entrega definidos." },
    look: { en: "A correct choice between scheduled and event-based, with a reason you can defend.",
            es: "Una elección correcta entre programado y basado en eventos, con una razón que puedas defender." } },
  { id: "governance", n: "06", name: "Governance", color: "#1E3A5F", session: 7, sessionLabel: { en: "Session 7", es: "Sesión 7" }, weight: 15,
    desc: { en: "The brakes. Authorization, review, and attribution rules that make the stack safe to run unattended.",
            es: "Los frenos. Reglas de autorización, revisión y atribución que hacen seguro correr el stack sin supervisión." },
    outcome: { en: "Brand guardrails plus at least one governance rule of each of the three types.",
               es: "Guardrails de marca más al menos una regla de gobernanza de cada uno de los tres tipos." },
    look: { en: "Guardrails phrased as enforceable constraints, not aspirations.",
            es: "Guardrails redactados como restricciones exigibles, no como aspiraciones." } },
];

export const SESSIONS = [
  { id: 1, tag: { en: "NEW STRUCTURE", es: "ESTRUCTURA NUEVA" },
    title: { en: "Single-Goal, Single-Agent Focus", es: "Foco de un solo objetivo, un solo agente" },
    date: { en: "Tuesday, September 1", es: "Martes, 1 de septiembre" }, time: "4:00–6:00 PM ET",
    points: {
      en: [
        "Welcome and how the four weeks actually run",
        "Why one agent built end-to-end beats spreading across ideas",
        "Single Agent Goal Brief activity — name, role, goal, why this task",
      ],
      es: [
        "Bienvenida y cómo funcionan en la práctica las cuatro semanas",
        "Por qué un agente construido de principio a fin gana contra dispersarse en varias ideas",
        "Actividad Single Agent Goal Brief — nombre, rol, objetivo, por qué esta tarea",
      ],
    },
    bring: {
      en: [
        "Laptop with Claude Cowork installed and signed in",
        "Obsidian vault already set up from the walkthrough",
        "One manual weekly task you want to hand off",
      ],
      es: [
        "Laptop con Claude Cowork instalado y con sesión iniciada",
        "Obsidian vault ya configurado según el walkthrough",
        "Una tarea manual semanal que quieras delegar",
      ],
    },
    homework: {
      en: [
        "Finish your Single Agent Goal Brief if not completed live",
        "Arrive at Session 2 with your Obsidian vault fully set up",
      ],
      es: [
        "Termina tu Single Agent Goal Brief si no lo completaste en vivo",
        "Llega a la Sesión 2 con tu Obsidian vault completamente configurado",
      ],
    },
    coreConcept: {
      en: { title: "Three AI Modes", desc: "Generative, Agentic, Automated — the same loop, with you in fewer steps each time." },
      es: { title: "Los tres modos de IA", desc: "Generativo, Agéntico, Automatizado — el mismo ciclo, contigo en menos pasos cada vez." },
    } },
  { id: 2, tag: { en: "KB MOVED HERE", es: "KB SE MUEVE AQUÍ" },
    title: { en: "RCTFX Framework + Knowledge Base", es: "Framework RCTFX + Knowledge Base" },
    date: { en: "Thursday, September 3", es: "Jueves, 3 de septiembre" }, time: "4:00–6:00 PM ET",
    points: {
      en: [
        "RCTFX Framework introduced — stays open while they build",
        "Knowledge Base setup, moved here from S3 so S3 can go deep on stages",
        "Obsidian to Cowork integration, with a ready-to-use prompt",
      ],
      es: [
        "Se presenta el Framework RCTFX — queda abierto mientras construyen",
        "Configuración del Knowledge Base, movida aquí desde S3 para que S3 pueda profundizar en las etapas",
        "Integración de Obsidian con Cowork, con un prompt listo para usar",
      ],
    },
    bring: {
      en: [
        "Completed Single Agent Goal Brief from Session 1",
        "Obsidian vault open, ready to populate",
        "One real piece of brand or client context to load",
      ],
      es: [
        "Single Agent Goal Brief completo de la Sesión 1",
        "Obsidian vault abierto, listo para poblar",
        "Una pieza real de contexto de marca o cliente para cargar",
      ],
    },
    homework: {
      en: [
        "Your Knowledge Base fully set up in the 03-Knowledge-Base folder",
        "Add one prompt you actually used to the shared Prompt Library",
      ],
      es: [
        "Tu Knowledge Base completamente configurado en la carpeta 03-Knowledge-Base",
        "Agrega un prompt que realmente usaste a la Prompt Library compartida",
      ],
    },
    coreConcept: {
      en: { title: "The RCTFX Framework", desc: "Role, Context, Task, Format, eXamples — the five layers of an instruction that actually works." },
      es: { title: "El Framework RCTFX", desc: "Role, Context, Task, Format, eXamples — las cinco capas de una instrucción que sí funciona." },
    } },
  { id: 3, tag: { en: "EXTENDED SEGMENT", es: "SEGMENTO EXTENDIDO" },
    title: { en: "Stages Deep Dive", es: "Profundización en Stages" },
    date: { en: "Tuesday, September 8", es: "Martes, 8 de septiembre" }, time: "4:00–6:00 PM ET",
    points: {
      en: [
        "RCTFX Base Template — the R-C-T-F-X structure, ready to fill",
        "Marketing Agent Catalog — five roles, refine the S1 goal against them",
        "Stages Setup Deep Dive, extended per direct feedback from the internal run",
      ],
      es: [
        "RCTFX Base Template — la estructura R-C-T-F-X, lista para llenar",
        "Marketing Agent Catalog — cinco roles, para refinar el objetivo de S1 contra ellos",
        "Profundización en la configuración de Stages, extendida según retroalimentación directa de la corrida interna",
      ],
    },
    bring: {
      en: [
        "Your Knowledge Base set up and populated",
        "Your goal brief, ready to refine",
        "The single task you repeat most often at work",
      ],
      es: [
        "Tu Knowledge Base configurado y poblado",
        "Tu goal brief, listo para refinar",
        "La tarea única que más repites en tu trabajo",
      ],
    },
    homework: {
      en: [
        "Refine your Goal Brief against the Marketing Agent Catalog",
        "Bring three moments that matter from your own work to Session 4",
      ],
      es: [
        "Refina tu Goal Brief contra el Marketing Agent Catalog",
        "Trae a la Sesión 4 tres momentos que importan de tu propio trabajo",
      ],
    },
    coreConcept: {
      en: { title: "Ship One Skill", desc: "Turn your most-repeated task into a Skill that loads itself when you need it." },
      es: { title: "Entrega un Skill", desc: "Convierte tu tarea más repetida en un Skill que se carga solo cuando lo necesitas." },
    } },
  { id: 4, tag: { en: "STANDARD", es: "ESTÁNDAR" },
    title: { en: "Full Agent Brief", es: "Agent Brief completo" },
    date: { en: "Thursday, September 10", es: "Jueves, 10 de septiembre" }, time: "4:00–6:00 PM ET",
    points: {
      en: [
        "Agent Brief Template in full — role, context, task, input, output, governance, hours saved",
        "Builds directly on the S1 brief; same agent, fuller specification",
        "The handoff contract — where multi-agent pipelines break and how to fix them",
      ],
      es: [
        "Agent Brief Template completo — rol, contexto, tarea, entrada, salida, gobernanza, horas ahorradas",
        "Construye directo sobre el brief de S1; el mismo agente, con especificación más completa",
        "El handoff contract — dónde se rompen los pipelines multi-agente y cómo arreglarlos",
      ],
    },
    bring: {
      en: [
        "Your refined Goal Brief",
        "Three moments that matter from your own work",
        "A working agent you can test against",
      ],
      es: [
        "Tu Goal Brief refinado",
        "Tres momentos que importan de tu propio trabajo",
        "Un agente funcionando contra el que puedas hacer pruebas",
      ],
    },
    homework: {
      en: [
        "Complete your full Agent Brief",
        "Test your pipeline end to end once before Session 5",
      ],
      es: [
        "Completa tu Agent Brief completo",
        "Prueba tu pipeline de principio a fin una vez antes de la Sesión 5",
      ],
    },
    coreConcept: {
      en: { title: "Ship One Skill", desc: "Turn your most-repeated task into a Skill that loads itself when you need it." },
      es: { title: "Entrega un Skill", desc: "Convierte tu tarea más repetida en un Skill que se carga solo cuando lo necesitas." },
    } },
  { id: 5, tag: { en: "STANDARD", es: "ESTÁNDAR" },
    title: { en: "Automation Triggers + MCP", es: "Triggers de automatización + MCP" },
    date: { en: "Tuesday, September 15", es: "Martes, 15 de septiembre" }, time: "4:00–6:00 PM ET",
    points: {
      en: [
        "Automation Trigger Config — setting a scheduled trigger in Cowork, step by step",
        "MCP connectors: what each one reaches, and scoping to the narrowest thing that works",
        "The framing question: is your agent time-based or event-based?",
      ],
      es: [
        "Automation Trigger Config — configurar un trigger programado en Cowork, paso a paso",
        "Conectores MCP: qué alcanza cada uno, y cómo delimitar su alcance a lo más estrecho que funcione",
        "La pregunta central: ¿tu agente es por tiempo o por evento?",
      ],
    },
    bring: {
      en: [
        "Your completed Agent Brief",
        "Your agent, working end to end",
        "Any blockers — these feed directly into Session 6",
      ],
      es: [
        "Tu Agent Brief completo",
        "Tu agente, funcionando de principio a fin",
        "Cualquier bloqueo — estos alimentan directo la Sesión 6",
      ],
    },
    homework: {
      en: [
        "Set up at least one trigger and let it fire before the next session",
        "Bring your blockers to Session 6 — that session exists for them",
      ],
      es: [
        "Configura al menos un trigger y deja que se dispare antes de la próxima sesión",
        "Trae tus bloqueos a la Sesión 6 — esa sesión existe para ellos",
      ],
    },
    coreConcept: {
      en: { title: "Reach & Rhythm", desc: "What a connector can touch, and the two things that make an agent start." },
      es: { title: "Alcance y ritmo", desc: "Qué puede tocar un conector, y las dos cosas que hacen que un agente arranque." },
    } },
  { id: 6, tag: { en: "NEW FORMAT", es: "FORMATO NUEVO" },
    title: { en: "Reset / Freestyle Q&A", es: "Reset / Preguntas libres" },
    date: { en: "Thursday, September 17", es: "Jueves, 17 de septiembre" }, time: "4:00–6:00 PM ET",
    points: {
      en: [
        "No new curriculum. This session exists to unblock before capstone week",
        "Full MCP Stack Reference available if connector questions surface",
        "Show & Tell brief sent individually — the 3-minute demo format for S8",
      ],
      es: [
        "Sin contenido nuevo. Esta sesión existe para desbloquear antes de la semana del capstone",
        "MCP Stack Reference completo disponible si surgen preguntas sobre conectores",
        "Brief de Show & Tell enviado individualmente — el formato de demo de 3 minutos para S8",
      ],
    },
    bring: {
      en: [
        "Your actual blockers, written down",
        "Whatever is half-finished — this session is for exactly that",
      ],
      es: [
        "Tus bloqueos reales, por escrito",
        "Lo que sea que tengas a medio terminar — esta sesión es exactamente para eso",
      ],
    },
    homework: {
      en: ["No new homework. Use this session's time to catch up on anything outstanding"],
      es: ["Sin tarea nueva. Usa el tiempo de esta sesión para ponerte al día en lo pendiente"],
    },
    coreConcept: null },
  { id: 7, tag: { en: "STANDARD", es: "ESTÁNDAR" },
    title: { en: "Governance + Capstone Prep", es: "Gobernanza + preparación del capstone" },
    date: { en: "Tuesday, September 22", es: "Martes, 22 de septiembre" }, time: "4:00–6:00 PM ET",
    points: {
      en: [
        "Brand Guardrail Template — forbidden phrases and tone checks",
        "Governance Playbook — three rule types: authorization, review, attribution",
        "Applying both to their own agent, closing the loop from the S1 brief",
      ],
      es: [
        "Brand Guardrail Template — frases prohibidas y chequeos de tono",
        "Governance Playbook — tres tipos de reglas: autorización, revisión, atribución",
        "Aplicar ambos a su propio agente, cerrando el ciclo que empezó con el brief de S1",
      ],
    },
    bring: {
      en: [
        "Your agent, running",
        "One governance concern you actually have about it",
      ],
      es: [
        "Tu agente, funcionando",
        "Una preocupación real de gobernanza que tengas sobre él",
      ],
    },
    homework: {
      en: [
        "Finalize your governance rules",
        "Prepare your 3-minute Show & Tell demo for Session 8",
      ],
      es: [
        "Finaliza tus reglas de gobernanza",
        "Prepara tu demo de Show & Tell de 3 minutos para la Sesión 8",
      ],
    },
    coreConcept: null },
  { id: 8, tag: { en: "FINALE", es: "FINAL" },
    title: { en: "Capstone + Show & Tell", es: "Capstone + Show & Tell" },
    date: { en: "Thursday, September 24", es: "Jueves, 24 de septiembre" }, time: "4:00–6:00 PM ET",
    points: {
      en: [
        "Capstone rubric — six layers, weights, what the instructor looks for",
        "Each student demos their agent live, built from the S1 brief through to now",
        "A shipped Skill counts as evidence for the Specification layer",
      ],
      es: [
        "Rúbrica del capstone — seis capas, pesos, qué busca el instructor",
        "Cada estudiante hace la demo de su agente en vivo, construido desde el brief de S1 hasta hoy",
        "Un Skill entregado cuenta como evidencia para la capa de Specification",
      ],
    },
    bring: {
      en: [
        "Your agent, working and ready to demo cold",
        "A 3-minute demo you have actually rehearsed once",
      ],
      es: [
        "Tu agente, funcionando y listo para hacer la demo sin ensayo previo",
        "Una demo de 3 minutos que ya hayas ensayado al menos una vez",
      ],
    },
    homework: {
      en: ["None. Maria sends the graduation and alumni email within 60 minutes of close"],
      es: ["Ninguna. Maria envía el correo de graduación y alumni dentro de los 60 minutos del cierre"],
    },
    coreConcept: null },
];

export const GLOSSARY = [
  { term: "Agent", session: "S1",
    def: { en: "A configured workspace that does one job repeatedly without being re-explained each time. Not a chatbot — a colleague with a written job description.",
           es: "Un workspace configurado que hace un trabajo repetidamente sin que se le vuelva a explicar cada vez. No es un chatbot — es un colega con una descripción de puesto por escrito." } },
  { term: "Agent Brief", session: "S4",
    def: { en: "The full specification of an agent: role, context, task, input, output, governance, and hours saved per week. Expanded from the Goal Brief.",
           es: "La especificación completa de un agente: rol, contexto, tarea, entrada, salida, gobernanza, y horas ahorradas por semana. Es una expansión del Goal Brief." } },
  { term: "Agentic (Mode 2)", session: "S1",
    def: { en: "You set the goal and approve the result; the agent does the work and the shipping. Where this cohort builds.",
           es: "Tú fijas el objetivo y apruebas el resultado; el agente hace el trabajo y la entrega. Es donde construye este cohorte." } },
  { term: "Automated (Mode 3)", session: "S1",
    def: { en: "The loop starts on its own — a schedule or an event — and runs while you are elsewhere. You only handle exceptions.",
           es: "El ciclo arranca solo — por horario o por evento — y corre mientras estás en otra parte. Tú solo manejas las excepciones." } },
  { term: "Capstone", session: "S8",
    def: { en: "The final build, demoed live in Session 8 and graded against the six-layer rubric. Nothing on it is a surprise.",
           es: "La construcción final, presentada en vivo en la Sesión 8 y calificada contra la rúbrica de seis capas. Nada en ella es sorpresa." } },
  { term: "Cowork", session: "S1",
    def: { en: "Anthropic's agentic workspace. Runs on desktop, web and mobile; sessions continue with no device online.",
           es: "El workspace agéntico de Anthropic. Corre en escritorio, web y móvil; las sesiones continúan sin ningún dispositivo conectado." } },
  { term: "Event-based trigger", session: "S5",
    def: { en: "Fires when something changes and stays silent otherwise. Use it when latency matters — a lead that waits until Monday may be lost.",
           es: "Se dispara cuando algo cambia y se queda en silencio el resto del tiempo. Úsalo cuando la latencia importa — un lead que espera hasta el lunes se puede perder." } },
  { term: "Generative (Mode 1)", session: "S1",
    def: { en: "Ask, get an answer, copy it somewhere else. Nothing carries over. Where most people stop.",
           es: "Preguntas, recibes una respuesta, la copias a otro lado. Nada queda guardado. Es donde se queda la mayoría de la gente." } },
  { term: "Governance", session: "S7",
    def: { en: "The brakes: authorization, review and attribution rules that make an unattended agent safe to run. Layer 06.",
           es: "Los frenos: reglas de autorización, revisión y atribución que hacen seguro correr un agente sin supervisión. Capa 06." } },
  { term: "Handoff contract", session: "S4",
    def: { en: "The exact output shape the first agent must produce, because it is the exact input shape the second one expects. Where pipelines break.",
           es: "La forma exacta de salida que el primer agente debe producir, porque es la forma exacta de entrada que espera el segundo. Es donde se rompen los pipelines." } },
  { term: "Knowledge Base", session: "S2",
    def: { en: "What the agent knows that a blank model does not — brand, clients, past work, and what it must never say. Layer 02.",
           es: "Lo que el agente sabe que un modelo en blanco no sabe — marca, clientes, trabajo previo, y lo que nunca debe decir. Capa 02." } },
  { term: "MCP", session: "S5",
    def: { en: "The connector standard. Not access to an app, but a specific set of permissions over specific data.",
           es: "El estándar de conectores. No es acceso a una app, sino un conjunto específico de permisos sobre datos específicos." } },
  { term: "Obsidian vault", session: "Pre-work",
    def: { en: "Plain markdown files on the student's own machine. Seven folders. No account, no cloud — which is why client context can live there.",
           es: "Archivos markdown planos en la propia máquina del estudiante. Siete carpetas. Sin cuenta, sin nube — por eso el contexto de clientes puede vivir ahí." } },
  { term: "Prompt Library", session: "S2",
    def: { en: "The shared document where the cohort collects prompts that actually worked. Students add to it as homework.",
           es: "El documento compartido donde el cohorte junta los prompts que sí funcionaron. Los estudiantes lo alimentan como tarea." } },
  { term: "RCTFX", session: "S2",
    def: { en: "Role, Context, Task, Format, eXamples — the five layers of a system instruction. Skip one and the agent fills the gap with a guess.",
           es: "Role, Context, Task, Format, eXamples — las cinco capas de un system instruction. Si saltas una, el agente llena el hueco adivinando." } },
  { term: "Scope", session: "S5",
    def: { en: "How much a connector is allowed to touch. The scope you request is the blast radius you accept — over-requesting loses capstone points.",
           es: "Cuánto se le permite tocar a un conector. El alcance que pides es el radio de impacto que aceptas — pedir de más resta puntos en el capstone." } },
  { term: "Show & Tell", session: "S8",
    def: { en: "The three-minute live demo each student gives in Session 8. Opened cold, in a fresh conversation.",
           es: "La demo en vivo de tres minutos que da cada estudiante en la Sesión 8. Se abre en frío, en una conversación nueva." } },
  { term: "Skill", session: "S3",
    def: { en: "A folder with a SKILL.md file. A procedure that travels between projects and loads itself when its description matches what you are doing.",
           es: "Una carpeta con un archivo SKILL.md. Un procedimiento que viaja entre proyectos y se carga solo cuando su descripción coincide con lo que estás haciendo." } },
  { term: "Specification", session: "S3-4",
    def: { en: "Writing the job precisely enough that output needs no editing. The layer the capstone weights most heavily. Layer 03.",
           es: "Escribir el encargo con la precisión suficiente para que el resultado no necesite edición. La capa que más pesa en el capstone. Capa 03." } },
  { term: "Stack", session: "All",
    def: { en: "The six layers built across the cohort: Identity, Knowledge, Specification, Tools, Automation, Governance. Each rests on the one below.",
           es: "Las seis capas construidas a lo largo del cohorte: Identity, Knowledge, Specification, Tools, Automation, Governance. Cada una se apoya en la de abajo." } },
  { term: "System instruction", session: "S1",
    def: { en: "Text that configures one workspace and applies to every conversation inside it. Always on, always costing context.",
           es: "Texto que configura un workspace y aplica a cada conversación dentro de él. Siempre activo, siempre consumiendo contexto." } },
  { term: "Time-based trigger", session: "S5",
    def: { en: "Fires on the clock whether or not anything happened. Use it when cadence is the point — a weekly digest is useful because it is weekly.",
           es: "Se dispara por reloj, haya pasado algo o no. Úsalo cuando la cadencia es el punto — un resumen semanal es útil porque es semanal." } },
];

export function stackLayerForSession(sessionId) {
  return STACK_LAYERS.filter((l) => l.session === sessionId);
}

/* ============================================================
   Talent Scout — Cohort Hub
   Contenido real portado desde talenscoutcohortforstudents.netlify.app
   (Student Hub + /showcase + /resources/stack). Contenido propio de
   Vibramente, movido a su propio producto nuevo.
   ============================================================ */

export const COHORT = {
  name: "Talent Scout — AI Marketing-Operator Cohort",
  runs: "Sep 1 – Sep 24, 2026",
  rhythm: "Tue & Thu, 4–6 PM ET",
  facilitator: "Felipe Salgado",
  operations: "Maria Villamil",
};

export const STACK_LAYERS = [
  { id: "identity", n: "01", name: "Identity", color: "#4F46E5", session: 1, sessionLabel: "Session 1", weight: 20,
    desc: "Who the agent is and what it owes you. Written once as a system instruction, loaded into every conversation after.",
    outcome: "A Single Agent Goal Brief and a system instruction saved in your workspace.",
    look: "A role with real seniority, and a stated uncertainty rule — not a personality description." },
  { id: "knowledge", n: "02", name: "Knowledge", color: "#0D9488", session: 2, sessionLabel: "Session 2", weight: 15,
    desc: "What the agent knows that a blank model does not. Brand, ICP, past work, the things it must never say.",
    outcome: "A populated Knowledge Base in your Obsidian vault, wired to the workspace.",
    look: "Real brand context, not placeholders. Freshness and structure over volume." },
  { id: "specification", n: "03", name: "Specification", color: "#EA580C", session: 4, sessionLabel: "Sessions 3–4", weight: 20,
    desc: "The job, written so precisely that the output needs no editing. This is RCTFX doing its work.",
    outcome: "A full Agent Brief: role, context, task, input, output, governance, hours saved per week.",
    look: "A Format layer specific enough that two runs produce the same shape." },
  { id: "toolsMcp", n: "04", name: "Tools & MCP", color: "#0284C7", session: 5, sessionLabel: "Session 5", weight: 15,
    desc: "The reach. Connectors that let the agent read and write in the systems where your work actually lives.",
    outcome: "At least one MCP connector authorized, scoped, and verified with a live command.",
    look: "Scope matched to the task. An over-permissioned connector loses points, not gains them." },
  { id: "automation", n: "05", name: "Automation", color: "#E11D48", session: 5, sessionLabel: "Session 5", weight: 15,
    desc: "The part that removes you. A trigger — time-based or event-based — that runs the work while you are elsewhere.",
    outcome: "One working trigger, with its schedule and delivery channel defined.",
    look: "A correct choice between scheduled and event-based, with a reason you can defend." },
  { id: "governance", n: "06", name: "Governance", color: "#1E3A5F", session: 7, sessionLabel: "Session 7", weight: 15,
    desc: "The brakes. Authorization, review, and attribution rules that make the stack safe to run unattended.",
    outcome: "Brand guardrails plus at least one governance rule of each of the three types.",
    look: "Guardrails phrased as enforceable constraints, not aspirations." },
];

export const SESSIONS = [
  { id: 1, tag: "NEW STRUCTURE", title: "Single-Goal, Single-Agent Focus",
    date: "Tuesday, September 1", time: "4:00–6:00 PM ET",
    points: [
      "Welcome and how the four weeks actually run",
      "Why one agent built end-to-end beats spreading across ideas",
      "Single Agent Goal Brief activity — name, role, goal, why this task",
    ],
    bring: [
      "Laptop with Claude Cowork installed and signed in",
      "Obsidian vault already set up from the walkthrough",
      "One manual weekly task you want to hand off",
    ],
    homework: [
      "Finish your Single Agent Goal Brief if not completed live",
      "Arrive at Session 2 with your Obsidian vault fully set up",
    ],
    coreConcept: { title: "Three AI Modes", desc: "Generative, Agentic, Automated — the same loop, with you in fewer steps each time." } },
  { id: 2, tag: "KB MOVED HERE", title: "RCTFX Framework + Knowledge Base",
    date: "Thursday, September 3", time: "4:00–6:00 PM ET",
    points: [
      "RCTFX Framework introduced — stays open while they build",
      "Knowledge Base setup, moved here from S3 so S3 can go deep on stages",
      "Obsidian to Cowork integration, with a ready-to-use prompt",
    ],
    bring: [
      "Completed Single Agent Goal Brief from Session 1",
      "Obsidian vault open, ready to populate",
      "One real piece of brand or client context to load",
    ],
    homework: [
      "Your Knowledge Base fully set up in the 03-Knowledge-Base folder",
      "Add one prompt you actually used to the shared Prompt Library",
    ],
    coreConcept: { title: "The RCTFX Framework", desc: "Role, Context, Task, Format, eXamples — the five layers of an instruction that actually works." } },
  { id: 3, tag: "EXTENDED SEGMENT", title: "Stages Deep Dive",
    date: "Tuesday, September 8", time: "4:00–6:00 PM ET",
    points: [
      "RCTFX Base Template — the R-C-T-F-X structure, ready to fill",
      "Marketing Agent Catalog — five roles, refine the S1 goal against them",
      "Stages Setup Deep Dive, extended per direct feedback from the internal run",
    ],
    bring: [
      "Your Knowledge Base set up and populated",
      "Your goal brief, ready to refine",
      "The single task you repeat most often at work",
    ],
    homework: [
      "Refine your Goal Brief against the Marketing Agent Catalog",
      "Bring three moments that matter from your own work to Session 4",
    ],
    coreConcept: { title: "Ship One Skill", desc: "Turn your most-repeated task into a Skill that loads itself when you need it." } },
  { id: 4, tag: "STANDARD", title: "Full Agent Brief",
    date: "Thursday, September 10", time: "4:00–6:00 PM ET",
    points: [
      "Agent Brief Template in full — role, context, task, input, output, governance, hours saved",
      "Builds directly on the S1 brief; same agent, fuller specification",
      "The handoff contract — where multi-agent pipelines break and how to fix them",
    ],
    bring: [
      "Your refined Goal Brief",
      "Three moments that matter from your own work",
      "A working agent you can test against",
    ],
    homework: [
      "Complete your full Agent Brief",
      "Test your pipeline end to end once before Session 5",
    ],
    coreConcept: { title: "Ship One Skill", desc: "Turn your most-repeated task into a Skill that loads itself when you need it." } },
  { id: 5, tag: "STANDARD", title: "Automation Triggers + MCP",
    date: "Tuesday, September 15", time: "4:00–6:00 PM ET",
    points: [
      "Automation Trigger Config — setting a scheduled trigger in Cowork, step by step",
      "MCP connectors: what each one reaches, and scoping to the narrowest thing that works",
      "The framing question: is your agent time-based or event-based?",
    ],
    bring: [
      "Your completed Agent Brief",
      "Your agent, working end to end",
      "Any blockers — these feed directly into Session 6",
    ],
    homework: [
      "Set up at least one trigger and let it fire before the next session",
      "Bring your blockers to Session 6 — that session exists for them",
    ],
    coreConcept: { title: "Reach & Rhythm", desc: "What a connector can touch, and the two things that make an agent start." } },
  { id: 6, tag: "NEW FORMAT", title: "Reset / Freestyle Q&A",
    date: "Thursday, September 17", time: "4:00–6:00 PM ET",
    points: [
      "No new curriculum. This session exists to unblock before capstone week",
      "Full MCP Stack Reference available if connector questions surface",
      "Show & Tell brief sent individually — the 3-minute demo format for S8",
    ],
    bring: [
      "Your actual blockers, written down",
      "Whatever is half-finished — this session is for exactly that",
    ],
    homework: ["No new homework. Use this session's time to catch up on anything outstanding"],
    coreConcept: null },
  { id: 7, tag: "STANDARD", title: "Governance + Capstone Prep",
    date: "Tuesday, September 22", time: "4:00–6:00 PM ET",
    points: [
      "Brand Guardrail Template — forbidden phrases and tone checks",
      "Governance Playbook — three rule types: authorization, review, attribution",
      "Applying both to their own agent, closing the loop from the S1 brief",
    ],
    bring: [
      "Your agent, running",
      "One governance concern you actually have about it",
    ],
    homework: [
      "Finalize your governance rules",
      "Prepare your 3-minute Show & Tell demo for Session 8",
    ],
    coreConcept: null },
  { id: 8, tag: "FINALE", title: "Capstone + Show & Tell",
    date: "Thursday, September 24", time: "4:00–6:00 PM ET",
    points: [
      "Capstone rubric — six layers, weights, what the instructor looks for",
      "Each student demos their agent live, built from the S1 brief through to now",
      "A shipped Skill counts as evidence for the Specification layer",
    ],
    bring: [
      "Your agent, working and ready to demo cold",
      "A 3-minute demo you have actually rehearsed once",
    ],
    homework: ["None. Maria sends the graduation and alumni email within 60 minutes of close"],
    coreConcept: null },
];

export const GLOSSARY = [
  { term: "Agent", session: "S1", def: "A configured workspace that does one job repeatedly without being re-explained each time. Not a chatbot — a colleague with a written job description." },
  { term: "Agent Brief", session: "S4", def: "The full specification of an agent: role, context, task, input, output, governance, and hours saved per week. Expanded from the Goal Brief." },
  { term: "Agentic (Mode 2)", session: "S1", def: "You set the goal and approve the result; the agent does the work and the shipping. Where this cohort builds." },
  { term: "Automated (Mode 3)", session: "S1", def: "The loop starts on its own — a schedule or an event — and runs while you are elsewhere. You only handle exceptions." },
  { term: "Capstone", session: "S8", def: "The final build, demoed live in Session 8 and graded against the six-layer rubric. Nothing on it is a surprise." },
  { term: "Cowork", session: "S1", def: "Anthropic's agentic workspace. Runs on desktop, web and mobile; sessions continue with no device online." },
  { term: "Event-based trigger", session: "S5", def: "Fires when something changes and stays silent otherwise. Use it when latency matters — a lead that waits until Monday may be lost." },
  { term: "Generative (Mode 1)", session: "S1", def: "Ask, get an answer, copy it somewhere else. Nothing carries over. Where most people stop." },
  { term: "Governance", session: "S7", def: "The brakes: authorization, review and attribution rules that make an unattended agent safe to run. Layer 06." },
  { term: "Handoff contract", session: "S4", def: "The exact output shape the first agent must produce, because it is the exact input shape the second one expects. Where pipelines break." },
  { term: "Knowledge Base", session: "S2", def: "What the agent knows that a blank model does not — brand, clients, past work, and what it must never say. Layer 02." },
  { term: "MCP", session: "S5", def: "The connector standard. Not access to an app, but a specific set of permissions over specific data." },
  { term: "Obsidian vault", session: "Pre-work", def: "Plain markdown files on the student's own machine. Seven folders. No account, no cloud — which is why client context can live there." },
  { term: "Prompt Library", session: "S2", def: "The shared document where the cohort collects prompts that actually worked. Students add to it as homework." },
  { term: "RCTFX", session: "S2", def: "Role, Context, Task, Format, eXamples — the five layers of a system instruction. Skip one and the agent fills the gap with a guess." },
  { term: "Scope", session: "S5", def: "How much a connector is allowed to touch. The scope you request is the blast radius you accept — over-requesting loses capstone points." },
  { term: "Show & Tell", session: "S8", def: "The three-minute live demo each student gives in Session 8. Opened cold, in a fresh conversation." },
  { term: "Skill", session: "S3", def: "A folder with a SKILL.md file. A procedure that travels between projects and loads itself when its description matches what you are doing." },
  { term: "Specification", session: "S3-4", def: "Writing the job precisely enough that output needs no editing. The layer the capstone weights most heavily. Layer 03." },
  { term: "Stack", session: "All", def: "The six layers built across the cohort: Identity, Knowledge, Specification, Tools, Automation, Governance. Each rests on the one below." },
  { term: "System instruction", session: "S1", def: "Text that configures one workspace and applies to every conversation inside it. Always on, always costing context." },
  { term: "Time-based trigger", session: "S5", def: "Fires on the clock whether or not anything happened. Use it when cadence is the point — a weekly digest is useful because it is weekly." },
];

export function stackLayerForSession(sessionId) {
  return STACK_LAYERS.filter((l) => l.session === sessionId);
}

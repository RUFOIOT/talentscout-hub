import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { RequireAuth, RequireFacilitator } from "./components/Guards";
import { FullPageLoader } from "./components/Skeleton";

// Route-level code-splitting: AuthPage (the very first thing every visitor
// sees, logged in or not) stays eager; everything behind a login gate loads
// on demand instead of shipping in the same ~850KB bundle as the login form.
const StudentHub = lazy(() => import("./pages/StudentHub"));
const SessionDetail = lazy(() => import("./pages/SessionDetail"));
const StackPage = lazy(() => import("./pages/StackPage"));
const GlossaryPage = lazy(() => import("./pages/GlossaryPage"));
const AchievementsPage = lazy(() => import("./pages/AchievementsPage"));
const CertificatePage = lazy(() => import("./pages/CertificatePage"));
const AnnouncementsPage = lazy(() => import("./pages/AnnouncementsPage"));
const Roster = lazy(() => import("./pages/facilitator/Roster"));
const Attendance = lazy(() => import("./pages/facilitator/Attendance"));

function App() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route path="/hub" element={<RequireAuth><StudentHub /></RequireAuth>} />
        <Route path="/sessions/:id" element={<RequireAuth><SessionDetail /></RequireAuth>} />
        <Route path="/stack" element={<RequireAuth><StackPage /></RequireAuth>} />
        <Route path="/glossary" element={<RequireAuth><GlossaryPage /></RequireAuth>} />
        <Route path="/achievements" element={<RequireAuth><AchievementsPage /></RequireAuth>} />
        <Route path="/certificate" element={<RequireAuth><CertificatePage /></RequireAuth>} />
        <Route path="/announcements" element={<RequireAuth><AnnouncementsPage /></RequireAuth>} />

        <Route path="/facilitator" element={<RequireFacilitator><Roster /></RequireFacilitator>} />
        <Route path="/facilitator/attendance" element={<RequireFacilitator><Attendance /></RequireFacilitator>} />
        <Route path="/facilitator/announcements" element={<RequireFacilitator><AnnouncementsPage /></RequireFacilitator>} />
      </Routes>
    </Suspense>
  );
}

export default App;

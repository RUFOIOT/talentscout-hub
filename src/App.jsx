import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import StudentHub from "./pages/StudentHub";
import SessionDetail from "./pages/SessionDetail";
import StackPage from "./pages/StackPage";
import GlossaryPage from "./pages/GlossaryPage";
import AchievementsPage from "./pages/AchievementsPage";
import CertificatePage from "./pages/CertificatePage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import Roster from "./pages/facilitator/Roster";
import Attendance from "./pages/facilitator/Attendance";
import { RequireAuth, RequireFacilitator } from "./components/Guards";

function App() {
  return (
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
  );
}

export default App;

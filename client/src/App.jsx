import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/auth/admin/login";
import AdminHome from "./pages/dashboard/admin/AdminHome";
import AgentHome from "./pages/dashboard/agent/AgentHome";
import Reset from "./pages/auth/admin/reset";
import TEAMINVITE from "./pages/auth/admin/teamInvite";
import Navbar from "./components/molecules/global/Navbar";
import Button from "./components/molecules/global/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./pages/auth/admin/Registration";
import AdminSidebar from "./components/molecules/dashboard/AdminSidebar";
import AgentSidebar from "./components/molecules/dashboard/AgentSidebar";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Searchbar from "./components/molecules/dashboard/Searchbar";
// import login from './pages/auth/admin/login';
// import { Reg } from './pages/auth/admin/Reg';
// import { RegAccount } from './pages/auth/admin/RegAccount';
import AdminRecord from "./pages/dashboard/admin/Records";
import AgentRecord from "./pages/dashboard/agent/Records";
import DashboardTemplate from "./components/molecules/dashboard/DashboardTemplate";
import SalesBoxGroup from "./components/molecules/dashboard/SalesBoxGroup";
import NotificationBar from "./components/molecules/dashboard/NotificationBar";
import SettingsNav from "./components/molecules/dashboard/SettingsNav";
import AgentSettings from "./pages/dashboard/agent/AgentSettings";
import AgentLeads from "./pages/dashboard/agent/AgentLeads";
import AdminTeams from "./pages/dashboard/admin/AdminTeams";

function App() {
  return (
    // <div>
    //     {/* <Navbar /> */}
    //     {/* <Home /> */}
    //     {/* <Features /> */}
    //     {/* <AdminSidebar /> */}
    //     {/* <AgentSidebar /> */}
    //     {/* <AgentRecord /> */}
    //     {/* <AdminRecord /> */}
    //     {/* <AdminHome /> */}
    //     {/* <AgentHome /> */}
    //   {/* <AgentLeads /> */}

    //   {/* Admin Home */}
    //   {/* <DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="Welcome back, Adewale!" />} dashboardNav={<SalesBoxGroup />} dashboardBody={<AdminHome />} /> */}

    //   {/* Agent Home */}
    //   {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="Welcome back, Adewale!" />} dashboardNav={<SalesBoxGroup />} dashboardBody={<AgentHome />} /> */}

    //   {/* Agent Records */}
    //   {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AgentRecord />} /> */}

    //   {/* Admin Home */}
    //   {/* <DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AdminRecord />} /> */}

    //   {/* Agent Settings */}
    //   {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<SettingsNav />} dashboardBody={<AgentSettings />} /> */}

    //   {/* Agent Leads */}

    //   {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AgentLeads />} /> */}

    //   {/* admin teams */}
    //   <DashboardTemplate sidebar={<AdminSidebar/>} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AdminTeams />} />
    // </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin-signup-one" element={<Registration />} />
      {/* <Route path="/pricing" element={<Pricing />} /> */}
      <Route path="/features" element={<Features />} />
      <Route path="/admin-login" element={<Login />} />
      <Route path="/dashboard/admin/Home" element={<AdminHome />} />
      <Route path="/dashboard/agent/Home" element={<AgentHome />} />
      {/* <Route path="/" element={<Button />} /> */}
    </Routes>
  );
}

export default App;

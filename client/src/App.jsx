import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminHome from "./pages/dashboard/admin/AdminHome";
import AgentHome from "./pages/dashboard/agent/AgentHome";
import TEAMINVITE from "./pages/auth/admin/TeamInvite";
import Navbar from "./components/molecules/global/Navbar";
import Button from "./components/molecules/global/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSidebar from "./components/molecules/dashboard/AdminSidebar";
import AgentSidebar from "./components/molecules/dashboard/AgentSidebar";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Searchbar from "./components/molecules/dashboard/Searchbar";
import Login from "./pages/auth/admin/Login";
import { RegAccount } from "./pages/auth/admin/RegAccount";
import { RegContact } from "./pages/auth/admin/RegContact";
import { Registration } from "./pages/auth/admin/Registration";
import { RegTeamInvite } from "./pages/auth/admin/RegTeamInvite";
import Reset from "./pages/auth/admin/Reset";
import TeamInvite from "./pages/auth/admin/TeamInvite";
import AdminRecord from "./pages/dashboard/admin/Records";
import AgentRecord from "./pages/dashboard/agent/Records";
import AgentClient from "./pages/dashboard/agent/Clients";
import AdminClient from "./pages/dashboard/admin/Clients";
import DashboardTemplate from "./components/molecules/dashboard/DashboardTemplate";
import SalesBoxGroup from "./components/molecules/dashboard/SalesBoxGroup";
import NotificationBar from "./components/molecules/dashboard/NotificationBar";
import AgentSettingsNav from "./components/molecules/dashboard/AgentSettingsNav";
import AgentSettings from "./pages/dashboard/agent/AgentSettings";
import AgentLeads from "./pages/dashboard/agent/AgentLeads";
import AdminTeams from "./pages/dashboard/admin/AdminTeams";
import AdminSettings from "./pages/dashboard/admin/AdminSettings";
import AdminSettingsNav from "./components/molecules/dashboard/AdminSettingsNav";
import Tasks from "./pages/dashboard/admin/Tasks";

function App() {
    return (
        // <div>
        //     {/* <Navbar /> */}
        //     {/* <Home /> */}
        //     {/* <Features /> */}
        //     {/* <AdminSidebar /> */}
        //     {/* <AgentSidebar /> */}
        //     {/* <AgentRecord /> */}
        //     {/* <AgentClients /> */}
        //     {/* <AdminRecord /> */}
        //     {/* <AdminClients /> */}
        //     {/* <AdminHome /> */}
        //     {/* <AgentHome /> */}
        //     {/* <AgentLeads /> */}
        //     {/* <AgentSettings /> */}
        //     {/* <AdminSettings /> */}
        //     {/* <Login /> */}
        //     {/* <RegAccount /> */}
        //     {/* <RegContact /> */}
        //     {/* <Registration /> */}
        //     {/* <RegTeamInvite /> */}
        //     {/* <Reset /> */}
        //     {/* <TeamInvite /> */}

        //     {/* <Tasks /> */}



        //     {/* Admin Home */}
        //     {/* <DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="Welcome back, Adewale!" />} dashboardNav={<SalesBoxGroup />} dashboardBody={<AdminHome />} /> */}


        //     {/* Agent Home */}
        //     {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="Welcome back, Adewale!" />} dashboardNav={<SalesBoxGroup />} dashboardBody={<AgentHome />} /> */}

        //     {/* Agent Records */}
        //     {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AgentRecord />} /> */}
                  
        //         {/* Agent Clients */}
        //     {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AgentClient />} /> */}

        //     {/* Agent Leads */}
        //     {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AgentLeads />} /> */}

        //     {/* Admin Record */}
        //     {/* <DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AdminRecord />} /> */}

        //     {/* Admin Settings */}
        //     {/* <DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<AdminSettingsNav />} dashboardBody={<AdminSettings />} /> */}

        //     {/* Admin Tasks */}
        //     {/* <DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={""} dashboardBody={<Tasks />} /> */}

        //     {/* Admin Settings */}
        //     {/* <DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<AdminSettingsNav />} dashboardBody={<AdminSettings />} /> */}

        //     {/* Agent Settings */}
        //     {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<AgentSettingsNav />} dashboardBody={<AgentSettings />} /> */}

        //     {/* <DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AgentLeads />} /> */}

        //     {/* admin teams */}
        //     {/* <DashboardTemplate sidebar={<AdminSidebar/>} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AdminTeams />} /> */}
        // </div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-signup-one" element={<Registration />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/admin-login" element={<Login />} />


            {/* ADMIN ROUTES */}
            {/* <Route path="/dashboard/admin/home" element={<DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="Welcome back, Adewale!" />} dashboardNav={<SalesBoxGroup />} dashboardBody={<AdminHome />} />} /> */}

            {/* <Route path="/dashboard/admin/records" element={<DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AdminRecord />} />} /> */}
            {/* <Route path="/dashboard/admin/clients" element={"Your clients will appear here"} /> */}
            {/* <Route path="/dashboard/admin/leads" element={"Your leads will appear here"} /> */}
            {/* <Route path="/dashboard/admin/claims" element={"Your claims will appear here"} /> */}
            {/* <Route path="/dashboard/admin/task" element={} /> */}
            {/* <Route path="/dashboard/admin/teams" element={<DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AdminTeams />} />} /> */}

            {/* <Route path="/dashboard/admin/settings" element={<DashboardTemplate sidebar={<AdminSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<AdminSettingsNav />} dashboardBody={<AdminSettings />} />} /> */}

            {/* AGENT ROUTE */}

            {/* <Route path="/dashboard/agent/home" element={<DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="Welcome back, Adewale!" />} dashboardNav={<SalesBoxGroup />} dashboardBody={<AgentHome />} />} /> */}

            {/* <Route path="/dashboard/agent/records" element={<DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AgentRecord />} />} /> */}

            {/* <Route path="/dashboard/agent/clients" element={} /> */}

            {/* <Route path="/dashboard/agent/leads" element={<DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<Searchbar />} dashboardBody={<AgentLeads />} />} /> */}

            {/* <Route path="/dashboard/agent/claims" element={} /> */}

            {/* <Route path="/dashboard/agent/task" element={} /> */}

            {/* <Route path="/dashboard/agent/settings" element={<DashboardTemplate sidebar={<AgentSidebar />} notificationSection={<NotificationBar topic="" />} dashboardNav={<AgentSettingsNav />} dashboardBody={<AgentSettings />} />} /> */}
        </Routes>
    );
}

export default App;

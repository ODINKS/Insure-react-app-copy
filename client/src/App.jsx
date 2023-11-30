import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminHome from "./pages/dashboard/admin/AdminHome";
import AgentHome from "./pages/dashboard/agent/AgentHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import AdminRecord from "./pages/dashboard/admin/AdminRecord";
import AgentRecord from "./pages/dashboard/agent/AgentRecord";
import AgentClient from "./pages/dashboard/agent/AgentClients";
import AdminClient from "./pages/dashboard/admin/AdminClients";
import AgentSettings from "./pages/dashboard/agent/AgentSettings";
import AgentLeads from "./pages/dashboard/agent/AgentLeads";
import AdminTeams from "./pages/dashboard/admin/AdminTeams";
import AdminSettings from "./pages/dashboard/admin/AdminSettings";
import NoPage from "./pages/NoPage";
import AdminDashboard from "./components/molecules/dashboard/AdminDashboard";
import AgentDashboard from "./components/molecules/dashboard/AgentDashboard";
import AdminLeads from "./pages/dashboard/admin/AdminLeads";
import AdminClaims from "./pages/dashboard/admin/AdminClaims";
import AdminTasks from "./pages/dashboard/admin/AdminTasks";
import AgentTasks from "./pages/dashboard/agent/AgentTasks";
import AgentClaims from "./pages/dashboard/agent/AgentClaims";
import { AgentLogin } from "./pages/auth/agent/AgentLogin";
import { AgentNewPassword } from "./pages/auth/agent/AgentNewPassword";
import { Registration } from "./pages/auth/agent/AgentRegistration";
import { Otp } from "./pages/auth/agent/otp";
import { ForgetPassword } from "./pages/auth/agent/forgetPassword";

function App() {


    return (
        // <div>
            
        // </div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-signup-one" element={<Registration />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/admin-login" element={<Login />} />
            {/* Agent Auth */}
            {/* <Route path="/auth/agent" /> */}

            {/* Admin Dashboard routes */}
            <Route path="/dashboard/admin/*" element={<AdminDashboard />}>
                <Route path="home" element={<AdminHome />} />
                <Route path="records" element={<AdminRecord />} />
                <Route path="clients" element={<AdminClient />} />
                <Route path="leads" element={<AdminLeads />} />
                <Route path="claims" element={<AdminClaims />} />
                <Route path="task" element={<AdminTasks />} />
                <Route path="teams" element={<AdminTeams />} />
                <Route path="settings" element={<AdminSettings />} />
            </Route>

            {/* Agent Dashboard Routes */}
            <Route path="/dashboard/agent/*" element={<AgentDashboard />}>
                <Route path="home" element={<AgentHome />} />
                <Route path="records" element={<AgentRecord />} />
                <Route path="clients" element={<AgentClient />} />
                <Route path="leads" element={<AgentLeads />} />
                <Route path="claims" element={<AgentClaims />} />
                <Route path="task" element={<AgentTasks />} />
                <Route path="settings" element={<AgentSettings />} />
            </Route>
            <Route path="*" element={<NoPage />} />
    

        </Routes>
    );

}

export default App;

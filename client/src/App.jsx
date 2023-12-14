import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminHome from "./pages/dashboard/admin/AdminHome";
import AgentHome from "./pages/dashboard/agent/AgentHome";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
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
import { AgentResetPassword } from "./pages/auth/agent/AgentResetPassword";
import { Registration } from "./pages/auth/agent/AgentRegistration";
import {Otp} from "./pages/auth/agent/Otp"
//import { ForgetPassword } from "./pages/auth/agent/ForgetPassword";

import Login from "./pages/auth/admin/AdminLogin";
import { AgentLogin } from "./pages/auth/agent/AgentLogin";
import { AdminRegContact } from "./pages/auth/admin/AdminRegContact";
import { AdminRegSetup } from "./pages/auth/admin/AdminRegSetup";
import { AdminRegTeamInvite } from "./pages/auth/admin/AdminRegTeamInvite";
import AdminForgetPassword from "./pages/auth/admin/AdminForgetPassword";
import AdminProfile from "./components/molecules/dashboard/AdminProfile";
import Sample from "./components/molecules/dashboard/Sample";
import { generatePDF } from "./components/molecules/dashboard/ButtonUtils";
import AdminAccounts from "./components/molecules/dashboard/AdminAccounts";
import { AdminRegistration } from "./pages/auth/admin/AdminRegistration";

import FormOverlay from "./components/molecules/dashboard/FormOverlay";
import AdminPayment from "./components/molecules/dashboard/AdminPayment";
import AdminNotifications from "./components/molecules/dashboard/AdminNotifications";
import AdminDeleteAccounts from "./components/molecules/dashboard/AdminDeleteAccounts";
import AdminSecurity from "./components/molecules/dashboard/AdminSecurity";
import PaystackHome from "./components/paystack/PaystackHome";
import { MultiStepper } from "./pages/auth/admin/MuiltiStepper";
import { AdminMultiStepper } from "./pages/auth/admin/AdminMultiStepper";
import { AgentSettingsProfile } from "./components/molecules/dashboard/AgentSettingsProfile";
import { AgentSettingsAccount } from "./components/molecules/dashboard/AgentSettingsAccount";
import AgentSettingsDelete from "./components/molecules/dashboard/AgentSettingsDelete";
import AgentSettingsNotification from "./components/molecules/dashboard/AgentSettingsNotification";
import AgentSettingsPassword from "./components/molecules/dashboard/AgentSettingsPassword";
import AgentSettingsSecurity from "./components/molecules/dashboard/AgentSettingsSecurity";
import AgentBioData from "./pages/auth/agent/AgentBioData";

function App() {
  return (
    // <div>
    //     <Sample  />
    // </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/form" element={<FormOverlay />} />
      {<Route path="/sample" element={<Sample />} />}
      {<Route path="/sample1" element={<AgentBioData />} />}
      <Route path="/paystackhome" element={<PaystackHome />} />
 
      {/* Admin Auth */}
      <Route path="/auth/admin/login" element={<Login />} />
      <Route path="/auth/admin/registration" element={<AdminMultiStepper />} />
      <Route
        path="/auth/admin/forgetpassword"
        element={<AdminForgetPassword />}
      />
      {/* <Route path="/auth/admin/otp" element={<AdminOtp />} /> */}
      {/* <Route path="/auth/admin/forgetpassword" element={<AdminForgetPassword />} /> */}

      {/* Agent Auth */}
      <Route path="/auth/agent/registration" element={<Registration />} />
      <Route path="/auth/agent/login" element={<AgentLogin />} />
      {/* {<Route path="/auth/agent/forgetpassword" element={<ForgetPassword />} />} */}
      {<Route path="/auth/agent/otp" element={<Otp />} />}
      <Route
        path="/auth/agent/resetpassword"
        element={<AgentResetPassword />}
      />

      {/* Admin Dashboard routes */}
      <Route path="/dashboard/admin/" element={<AdminDashboard />}>
        <Route index element={<AdminHome />} />
        <Route path="records" element={<AdminRecord />} />
        <Route path="clients" element={<AdminClient />} />
        <Route path="leads" element={<AdminLeads />} />
        <Route path="claims" element={<AdminClaims />} />
        <Route path="task" element={<AdminTasks />} />
        <Route path="teams" element={<AdminTeams />} />
        <Route path="settings/*" element={<AdminSettings />}>
          <Route index element={<AdminProfile />} />
          <Route path="accounts" element={<AdminAccounts />} />
          <Route path="payment" element={<AdminPayment />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="delete-account" element={<AdminDeleteAccounts />} />
          <Route path="security" element={<AdminSecurity />} />
        </Route>
      </Route>

      {/* Agent Dashboard Routes */}
      <Route path="/dashboard/agent/*" element={<AgentDashboard />}>
        <Route index element={<AgentHome />} />
        <Route path="records" element={<AgentRecord />} />
        <Route path="clients" element={<AgentClient />} />
        <Route path="leads" element={<AgentLeads />} />
        <Route path="claims" element={<AgentClaims />} />
        <Route path="task" element={<AgentTasks />} />
        <Route path="settings" element={<AgentSettings />}>
          <Route index element={<AgentSettingsProfile />} />
          <Route path="accounts" element={<AgentSettingsAccount />} />
          <Route path="payment" element={<AdminPayment />} />
          <Route path="notifications" element={<AgentSettingsNotification />} />
          <Route path="delete-account" element={<AgentSettingsDelete />} />
          <Route path="change-password" element={<AgentSettingsPassword />} />
          <Route path="security" element={<AgentSettingsSecurity />} />
        </Route>
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;

import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DashboardTemplate from './DashboardTemplate'
import AdminSidebar from './AdminSidebar'
import NotificationBar from './NotificationBar'
import AdminHome from '../../../pages/dashboard/admin/AdminHome'
import AdminRecord from '../../../pages/dashboard/admin/AdminRecord'
import AdminClient from '../../../pages/dashboard/admin/AdminClients'
import AdminLeads from '../../../pages/dashboard/admin/AdminLeads'
import AdminClaims from '../../../pages/dashboard/admin/AdminLeads'
import AdminTasks from '../../../pages/dashboard/admin/AdminTasks'
import AdminTeams from '../../../pages/dashboard/admin/AdminTeams'
import AdminSettings from '../../../pages/dashboard/admin/AdminSettings'
import Searchbar from './Searchbar'

const AdminDashboard = () => {
  return (
    <>
        <DashboardTemplate 
            sidebar={<AdminSidebar />}

            notificationSection={<NotificationBar />}
            
            dashboardBody={ <Outlet />}
        />
    </>
  )
}

export default AdminDashboard

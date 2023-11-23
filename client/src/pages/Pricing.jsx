import React from 'react'
import AdminRecord from './dashboard/admin/Records'
import AgentRecord from './dashboard/agent/Records'
import AdminHome from './dashboard/admin/AdminHome'
// import teamInvite from './auth/admin/teamInvite'
// import reset from './auth/admin/reset'








const Pricing = () => {
  return (
    <div>
        <AdminHome />
        <AdminRecord />
        <AgentRecord />
        {/* <teamInvite />
        <reset /> */}
    </div>
  )
}

export default Pricing
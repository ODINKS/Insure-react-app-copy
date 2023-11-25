import React, { useState } from "react";
import AdminTeamsCard from "../../../components/molecules/dashboard/AdminTeamsCard";
import AdminTeamsPerformers from "../../../components/molecules/dashboard/AdminTeamsPerformers";
import Button from "../../../components/molecules/global/Button";
const AdminTeams = () => {
  const data = [
    {
      id: 1,
      name: "John Nicholas",
      staffId: "CAD/1",
      role: "Admin",
      email: "Nick@eyahoo.com",
      portfolio: "1.6milloin",
      status: "Actions",
    },
    {
      id: 2,
      name: "Alicia Joseph",
      staffId: "CAD/2",
      role: "Agent",
      email: "licia@gmail.com",
      portfolio: "1.2million",
      status: "Actions",
    },
  ];

  return (
    <>
      <section className="bg-blue-100 h-screen w-full font-Lato">
        {/* top section */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 justify-between mx-auto mb-8">
          {/* left side */}
          <div className="mt-4 w-full grid lg:grid-cols-2 grid-cols-1 justify-between gap-2 lg:gap-6">
            {/* col 1 */}
            <AdminTeamsCard title="Agent Leads" value="40" />
            <AdminTeamsCard title="Contracts" value="10" />
            {/* col 2 */}
            <AdminTeamsCard title="Probation" value="5" />
            <AdminTeamsCard title="Full time" value="25" />
          </div>

          {/* right side */}
          <div className="bg-[--white-bg] mt-4 mx-auto py-4 px-9 w-full h-[11.5rem] rounded-md shadow-md">
            <h2 className="font-bold text-xl mb-3">Top Performers</h2>

            <AdminTeamsPerformers />
            <AdminTeamsPerformers />
            <AdminTeamsPerformers />
          </div>
        </div>

        {/* table section */}
        <div className="overflow-x-auto text-left h-auto">
          <table className="min-w-full bg-[--white-bg]">
            <thead>
              <tr className="border-b border-b-1 border-black	">
                <th className=" px-4 py-2">S/N</th>
                <th className=" px-4 py-2">Name</th>
                <th className=" px-4 py-2">Staff ID</th>
                <th className=" px-4 py-2">Role</th>
                <th className=" px-4 py-2">Email</th>
                <th className=" px-4 py-2">Portfolio</th>
                <th className=" px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b border-b-1 border-black">
                  <td className=" px-4 py-2">{row.id}</td>
                  <div className="flex gap-1 item-center justify-center">
                    <div className="self-center place-items-center">
                      <img
                        src="https://res.cloudinary.com/dfo28lkwl/image/upload/v1700863051/images_vtestj.jpg"
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <td className=" px-4 py-2">{row.name}</td>
                    </div>
                  </div>
                  <td className=" px-4 py-2">{row.staffId}</td>
                  <td className=" px-4 py-2">{row.role}</td>
                  <td className=" px-4 py-2">{row.email}</td>
                  <td className=" px-4 py-2">{row.portfolio}</td>
                  <td className=" px-4 py-2">
                    <button className="bg-orange-500 text-white px-4 py-1 rounded">
                      {row.status}
                    </button>
                    {/* <Button description={row.status} /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminTeams;

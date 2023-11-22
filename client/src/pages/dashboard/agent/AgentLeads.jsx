import React from "react";
import AgentSidebar from "../../../components/molecules/dashboard/AgentSidebar";

const AgentLeads = () => {
  return (
    <>
      {/* agent sidebar component */}

      <AgentSidebar />

      {/* leads section */}
      <section className="bg-blue-100 h-screen w-screen flex flex-wrap">
        {/* new leads */}
        <div className="flex flex-wrap justify-start ml-[20rem] bg-purple-400">
          <div className="bg-[--white-bg] m-2  mt-4 w-[18rem] h-auto rounded-md shadow-md absolute">
            <h4 className="text-[#111111] bg-yellow-200 w-full uppercase text-center p-2">
              New Leads
            </h4>

            {/* leads listing 1 */}
            <div className="border border-gray-400 p-4 m-4 rounded-md w-auto">
              <h4 className="text-gray-800 pb-1">Adewumi Gabriel</h4>
              <p className="text-gray-600">Blockchain Dev </p>
              <p className="text-gray-400 text-right">See More</p>
            </div>

            {/* leads listing 2 */}
            <div className="border border-gray-400 p-4 m-4 rounded-md w-auto">
              <h4 className="text-gray-800 pb-1">Abbas Ahmed</h4>
              <p className="text-gray-600">Dev Reels </p>
              <p className="text-gray-400 text-right">See More</p>
            </div>
          </div>

          {/* leads inprogress */}

          <div className="bg-[--white-bg] m-2 ml-[20rem] mt-4 w-[18rem] h-auto rounded-md shadow-md absolute">
            <h4 className="text-[#111111] bg-blue-200 w-full uppercase text-center p-2">
              In Progress
            </h4>

            {/* leads listing 1 */}
            <div className="border border-gray-400 p-4 m-4 rounded-md w-auto">
              <h4 className="text-gray-800 pb-1">James Gabriel</h4>
              <p className="text-gray-600">Blockchain Dev </p>
              <p className="text-gray-400 text-right">See More</p>
            </div>
          </div>

          {/* won/closed leads */}

          <div className="bg-[--white-bg] m-2 ml-[40rem] mt-4 w-[18rem] h-auto rounded-md shadow-md absolute">
            <h4 className="text-[#111111] bg-green-200 w-full uppercase text-center p-2">
              Closed Leads
            </h4>

            {/* leads listing 1 */}
            <div className="border border-gray-400 p-4 m-4 rounded-md w-auto">
              <h4 className="text-gray-800 pb-1">Alicia Joseph</h4>
              <p className="text-gray-600">Blockchain Dev </p>
              <p className="text-gray-400 text-right">See More</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentLeads;

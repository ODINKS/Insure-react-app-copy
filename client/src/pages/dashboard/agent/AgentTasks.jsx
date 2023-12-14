import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AgentSidebar from '../../../components/molecules/dashboard/AgentSidebar'
import { VscTriangleDown } from "react-icons/vsc";
import DashboardHeader from "../../../components/molecules/dashboard/NotificationBar";
import Button from '../../../components/molecules/global/Button'

const AgentTasks = () => {
  const [dateState, setDateSate] = useState(new Date());
  const handleDateChange = (e) => {
    setDateSate(e);

  }

  return (
   <div className="">
      {/* <div className="bg-white rounded-md p-4">
        <p>Today's task</p>
        <strong>20</strong>
      </div>
      <div className="col-start-1 row-start-2 bg-white rounded-md p-4">
        <p>Completed tasks</p>
        <strong>20</strong>
      </div> */}
      {/* <div className="col-span-2 row-span-2 col-start-2 row-start-1 bg-white rounded-md p-4">
        <p className="font-bold">Assigned tasks</p>
        <div className="w-full flex flex-col gap-4 justify-between mt-5 ">
          <p>CAD/005.................. 3 Tasks</p>
          <p>CAD/005.................. 3 Tasks</p>
          <p>CAD/005.................. 3 Tasks</p>
        </div>
      </div> */}
      {/* <div className="col-span-2 row-span-2 col-start-4 row-start-1 bg-white rounded-md h-80 ">
        <Calendar onChange={handleDateChange} value={dateState} />
      </div> */}
      <div className="flex justify-between w-full h-70">
      {/* first card */}
        <div className="flex flex-col gap-y-14 h-full 
         w-[18rem]">
          <div className="bg-white rounded-lg p-8 ">
            <p>Today's task</p>
            <strong>20</strong>
          </div>
          <div className=" bg-white rounded-lg p-8">
            <p>Completed tasks</p>
            <strong>20</strong>
          </div>
        </div>
        {/* second card */}
        <div className=" bg-white rounded-lg p-4 w-[18rem] flex flex-col
        items-center gap-y-3">
          <h1 className="font-bold">Assigned tasks</h1>
          <div className="flex flex-col gap-y-8">
            <p>CAD/005   .................. &emsp; 3 Tasks</p>
            <p>CAD/005 .................. &emsp; 3 Tasks</p>
            <p>CAD/005 .................. &emsp; 3 Tasks</p>
          </div>
        </div>
        {/* third card */}
        <div className=" bg-white rounded-md h-full ">
          <Calendar onChange={handleDateChange} value={dateState} />
        </div>
      </div>

      

      {/* table */}
      <div className="col-span-5 row-span-3 row-start-3 bg-white rounded-md mt-6 p-2">
      <div className="flex items-center justify-between w-full border-b-4 border-bg-[#000] pb-3">
          <h1 className="font-bold uppercase ">Todo List</h1>
          <button className="flex items-center bg-[#e76927] w-max text-white rounded-md py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add New
            {/* <Button description="Add new" width="full" /> */}
          </button>
        </div>
        Tasks
        <div className="w-[600px] pt-4 flex gap-4 items-center justify-between font-bold">
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" />
            <p>Policy documents for new clients</p>
          </div>
          <div>
            <span>Agent CAD/005</span>
          </div>
        </div>
        <div className="flex justify-between w-full border-b-4 border-bg-[#000] pb-3 py-3 px-7">
          <p className="max-w-[80%]">
          Guide clients through the submission of required documents.
          Use the app to upload and manage client documents securely.{" "}
          </p>

          <button className="flex items-center bg-[#e76927] w-max text-white rounded-md px-5">
            {" "}
            Action <VscTriangleDown />
          </button>
        </div>
        <div className="w-[600px] pt-4 flex gap-4 items-center justify-between font-bold">
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" />
            <p>Verify Daily leads</p>
          </div>
          <div>
            <span>Agent CAD/098</span>
          </div>
        </div>
        <div className="flex justify-between w-full border-b-4 border-bg-[#000] pb-3 py-3 px-7">
          <p className="max-w-[80%]">
          Communicate with clients to understand their insurance needs.
          Utilize the app to access client profiles and policy details.{" "}
          </p>

          <button className="flex items-center bg-[#e76927] w-max text-white rounded-md px-5">
            {" "}
            Action <VscTriangleDown />
          </button>
        </div>
    </div>
    </div>
  )
}

export default AgentTasks




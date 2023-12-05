import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AdminSidebar from "../../../components/molecules/dashboard/AdminSidebar";
import DashboardHeader from "../../../components/molecules/dashboard/NotificationBar";
import Button from "../../../components/molecules/global/Button";
import { VscTriangleDown } from "react-icons/vsc";

const AdminTasks = () => {
  const [dateState, setDateSate] = useState(new Date());
  const handleDateChange = (e) => {
    setDateSate(e);
  };

  return (
    // <main className="bg-[#f4f4f4] w-full h-screen ">
    // </main>
    <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-4 w-[80%] h-[90vh] p-5 absolute top-[60px] right-0">
      <div className="bg-white rounded-md p-4">
        <p>Today's task</p>
        <strong>20</strong>
      </div>
      <div className="col-start-1 row-start-2 bg-white rounded-md p-4">
        <p>Completed tasks</p>
        <strong>20</strong>
      </div>
      <div className="col-span-2 row-span-2 col-start-2 row-start-1 bg-white rounded-md p-4">
        <p className="font-bold">Assigned tasks</p>
        <div className="w-full flex flex-col gap-4 justify-between mt-5 ">
          <p>CAD/005.................. 3 Tasks</p>
          <p>CAD/005.................. 3 Tasks</p>
          <p>CAD/005.................. 3 Tasks</p>
        </div>
      </div>
      <div className="col-span-2 row-span-2 col-start-4 row-start-1 bg-white rounded-md p-4 mb-4 overflow-auto">
        <Calendar onChange={handleDateChange} value={dateState} />
      </div>
      {/* <div className="col-span-5 row-span-3 row-start-3 bg-white rounded-md mt-5 p-4">
        <div className="flex items-center justify-between w-full border-b-4 border-bg-[#000] pb-3">
          <h1 className="font-bold uppercase">Todo List</h1>
          <div className="flex items-center bg-[#e76927] w-max text-white rounded-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <Button description="Add new" width="full" />
          </div>
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

        <div className="flex justify-between w-[1000px] border-b-4 border-bg-[#000] pb-3 py-3 px-7">
          <p className="max-w-[80%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            deleniti excepturi cumque quo beatae tempore error?{" "}
          </p>

          <div className="flex items-center bg-[#e76927] w-max text-white rounded-md px-5">
            {" "}
            <Button description="Action" width="max" /> <VscTriangleDown />
          </div>
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

        <div className="flex justify-between w-[1000px] border-b-4 border-bg-[#000] pb-3 py-3 px-7">
          <p className="max-w-[80%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            deleniti excepturi cumque quo beatae tempore error?{" "}
          </p>

          <div className="flex items-center bg-[#e76927] w-max text-white rounded-md px-5">
            {" "}
            <Button description="Action" width="max" /> <VscTriangleDown />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdminTasks;

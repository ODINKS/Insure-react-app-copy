import React from "react";
import { useState } from "react";
import Searchbar from "../../../components/molecules/dashboard/Searchbar";

const AgentLeads = () => {
  const [widgets, setWidgets] = useState([]);

  // const handleOnDrag = (e, widgetContent) => {
  //   e.dataTransfer.setData("text/plain", widgetContent);
  //   console.log("widgetContent", widgetContent);
  // };

  const handleOnDrag = (e) => {
    const draggedElement = e.target;
    const name = draggedElement.querySelector("h4").textContent;
    const description = draggedElement.querySelector("p").textContent;

    const widgetContent = `${name}|${description}`;
    e.dataTransfer.setData("text/plain", widgetContent);
    console.log("widgetContent", widgetContent);
  };

  // const handleOnDrop = (e) => {
  //   const widgetType = e.dataTransfer.getData("widgetType");
  //   console.log("widgetType", widgetType);
  //   setWidgets([...widgets, widgetType]);
  // };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const widgetContent = e.dataTransfer.getData("text/plain");
    console.log("widgetContent", widgetContent);

    const [name, description] = widgetContent.split("|");

    setWidgets([...widgets, { name, description }]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Searchbar />
      {/* leads section */}
      <section className="bg-blue-100 h-screen w-full flex flex-wrap">
        {/* new leads */}
        <div className="flex flex-wrap justify-between w-full">
          <div className="widgets bg-[--white-bg] mt-4 w-[19rem] rounded-md shadow-md h-fit">
            <h4 className="text-[#111111] bg-yellow-200 w-full uppercase text-center p-2">
              New Leads
            </h4>

            {/* leads listing 1 */}
            <div
              className="widget border border-gray-400 p-4 m-4 rounded-md w-auto"
              draggable
              onDragStart={handleOnDrag}
            >
              <h4 className="text-gray-800 pb-1">Adewumi Gabriel</h4>
              <p className="text-gray-600">Blockchain Dev </p>
              <p className="text-gray-400 text-right">See More</p>
            </div>

            {/* leads listing 2 */}
            {/* <div className="border border-gray-400 p-4 m-4 rounded-md w-auto">
              <h4 className="text-gray-800 pb-1">Abbas Ahmed</h4>
              <p className="text-gray-600">Dev Reels </p>
              <p className="text-gray-400 text-right">See More</p>
            </div> */}
          </div>

          {/* leads inprogress */}
          <div
            className="bg-[--white-bg] mt-4 w-[19rem] h-fit rounded-md shadow-md"
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
          >
            <h4 className="text-[#111111] bg-blue-200 w-full uppercase text-center p-2">
              In Progress
            </h4>

            {widgets.map((widget, index) => (
              <div
                className="widget border border-gray-400 p-4 m-4 rounded-md w-auto"
                key={index}
              >
                <h4 className="text-gray-800 pb-1">{widget.name}</h4>
                <p className="text-gray-600">{widget.description}</p>
                <p className="text-gray-400 text-right">See More</p>
              </div>
            ))}
            {/* leads listing 1 */}
            {/* <div className="border border-gray-400 p-4 m-4 rounded-md w-auto">
              <h4 className="text-gray-800 pb-1">James Gabriel</h4>
              <p className="text-gray-600">Blockchain Dev </p>
              <p className="text-gray-400 text-right">See More</p>
            </div> */}
          </div>

          {/* won/closed leads */}

          <div className="bg-[--white-bg] mt-4 w-[19rem] h-fit rounded-md shadow-md">
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

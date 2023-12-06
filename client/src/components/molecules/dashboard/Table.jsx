import React, { useState, useEffect } from "react";
import DropDownMenu from "./DropDownMenu";

const Table = ({ data }) => {
  // database retrieve starts
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Retrieve form data from local storage
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(storedData);
  }, []);
  // database retrieve ends

  const { tableHead, tabledata } = data;

  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const pageSize = 5; // Items per page

  const handlePreviousClick = () => {
    if (currentPageIndex > 1) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleNextClick = () => {
    const lastPageIndex = Math.ceil(tabledata.length / pageSize);
    if (currentPageIndex < lastPageIndex) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const isLastPage =
    currentPageIndex === Math.ceil(tabledata.length / pageSize);
  const isFirstPage = currentPageIndex === 1;

  const currentPageData = tabledata.slice(
    (currentPageIndex - 1) * pageSize,
    currentPageIndex * pageSize
  );

  //disply first 5
  const rendredData = formData.map((data, index) => {
    return (
      <tr class="bg-white border-b  hover:bg-gray-50 ">
        <td class="w-4 p-4">{index + 1}</td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {data.policy_no}
        </th>
        <td class="px-6 py-4">{data.duration}</td>
        <td class="px-6 py-4">{data.premium_amt}</td>
        <td class="px-6 py-4">{data.name}</td>
        <td class="px-6 py-4">{data.product}</td>
        <td class="px-6 py-4">
          <DropDownMenu
            data={{
              actionState: ["Approve", "Reject", "Transfer"],
              
            }}
          />
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="p-4">
                {tableHead.head1}
              </th>
              <th scope="col" class="px-6 py-3">
                {tableHead.head2}
              </th>
              <th scope="col" class="px-6 py-3">
                {tableHead.head3}
              </th>
              <th scope="col" class="px-6 py-3">
                {tableHead.head4}
              </th>
              <th scope="col" class="px-6 py-3">
                {tableHead.head5}
              </th>
              <th scope="col" class="px-6 py-3">
                {tableHead.head6}
              </th>
              <th scope="col" class="px-6 py-3">
                {tableHead.head7}
              </th>
            </tr>
          </thead>
          <tbody>{rendredData}</tbody>
        </table>
        <nav
          class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span class="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span class="font-semibold text-orange-500">
              {(currentPageIndex - 1) * pageSize + 1}
            </span>
            -
            {currentPageIndex * pageSize > tabledata.length
              ? tabledata.length
              : currentPageIndex * pageSize}{" "}
            of{" "}
            <span class="font-semibold text-orange-500">
              {tabledata.length}
            </span>
          </span>
          <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                onClick={handlePreviousClick}
                disabled={isFirstPage}
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </a>
            </li>
            {Array.from({ length: Math.ceil(tabledata.length / pageSize) }).map(
              (_, index) => (
                <li key={index}>
                  <a
                    onClick={() => setCurrentPageIndex(index + 1)}
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    {index + 1}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                onClick={handleNextClick}
                disabled={isLastPage}
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Table;

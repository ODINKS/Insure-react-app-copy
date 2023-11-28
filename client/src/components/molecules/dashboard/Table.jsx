import React, { useState } from 'react'

const Table = ({ data }) => {
    const { tableHead, tabledata } = data;
    console.log(tabledata, "table data")

    function next() {

    }


    //disply first 5
    const rendredData = tabledata.map((leads) => {
        return (
            <tr class="bg-white border-b  hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    {leads.data1}
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {leads.data2}
                </th>
                <td class="px-6 py-4">
                    {leads.data3}
                </td>
                <td class="px-6 py-4">
                    {leads.data4}
                </td>
                <td class="px-6 py-4">
                    {leads.data5}
                </td>
                <td class="px-6 py-4">
                    {leads.data6}
                </td>
                <td class="px-6 py-4">
                    {leads.data7}
                </td>
            </tr>

        )
    })

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
                    <tbody>
                        {rendredData}
                    </tbody>
                </table>
                <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-orange-500">1-5</span> of <span class="font-semibold text-orange-500">{tabledata.length}</span></span>
                    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a onClick={next} class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                        </li>
                        <li>
                            <a onClick={next} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                        </li>
                        <li>
                            <a onClick={next} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                        </li>
                        <li>
                            <a onClick={next} aria-current="page" class="flex items-center justify-center px-3 h-8 text-orange-500 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-gray-700">3</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Table
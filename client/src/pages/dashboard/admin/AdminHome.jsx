import React  from 'react'
import SalesBox from '../../../components/molecules/dashboard/SalesBox'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from '../../../utils/Data';
import { useState } from 'react'
import PieChart from '../../../components/molecules/dashboard/PieChart';
import { BarChart } from '../../../components/molecules/dashboard/BarChart';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../../components/molecules/dashboard/AdminSidebar';
import Track from '../../../components/molecules/dashboard/Track';





Chart.register(CategoryScale);

const AdminHome = () => {

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });


  return (
    <div>
        <body className="flex bg-gray-100 min-h-screen">
  {/* <!-- sidebar navigation --> */}
  <aside className="hidden sm:flex sm:flex-col bg-white shadow md:h-screen sticky top-0">
    <Link to="/" className="inline-flex items-center justify-center h-20 w-30 cursor-pointer">
      <img src="https://tinyurl.com/3wuh45ve" alt="Insure" class="h-10 w-15 cursor-pointer"  />
    </Link>
    <div className="flex-grow flex flex-col justify-between text-gray-500 bg-white shadow">
      <nav className="flex flex-col mx-9 my-6 space-y-4">
        <a href="./homeAdminDashboard.html" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-100 focus:bg-gray-200  rounded-lg">
          <span className="sr-only">Home</span>
          <svg className="mr-2" width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.7555 11.37C24.7555 12.171 24.1106 12.7984 23.3797 12.7984H22.004L22.034 19.9275C22.034 20.0476 22.0255 20.1678 22.0126 20.2879V21.0044C22.0126 21.9878 21.243 22.7844 20.2928 22.7844H19.6049C19.5576 22.7844 19.5103 22.7844 19.4631 22.78C19.4029 22.7844 19.3427 22.7844 19.2825 22.7844H17.8852H16.8534C15.9032 22.7844 15.1336 21.9878 15.1336 21.0044V19.9364V17.0883C15.1336 16.3006 14.5188 15.6643 13.7578 15.6643H11.0063C10.2453 15.6643 9.63049 16.3006 9.63049 17.0883V19.9364V21.0044C9.63049 21.9878 8.86091 22.7844 7.91076 22.7844H6.87892H5.50744C5.44295 22.7844 5.37846 22.78 5.31397 22.7755C5.26238 22.78 5.21078 22.7844 5.15919 22.7844H4.4713C3.52115 22.7844 2.75157 21.9878 2.75157 21.0044V16.0203C2.75157 15.9802 2.75157 15.9357 2.75587 15.8957V12.7984H1.37578C0.601906 12.7984 0 12.1754 0 11.37C0 10.9694 0.12898 10.6134 0.429933 10.3019L11.4534 0.356006C11.7544 0.0445008 12.0983 0 12.3993 0C12.7002 0 13.0442 0.0890016 13.3021 0.311506L24.2826 10.3019C24.6265 10.6134 24.7985 10.9694 24.7555 11.37Z" fill="#6495ED"/>
            </svg>
            <div className="text-blue-600 text-lg mr-3">Home</div>
        </a>
        <a href="./adminReport.html" className="inline-flex items-center justify-center py-2 hover:text-gray-400 hover:bg-gray-100 focus:bg-gray-200  rounded-lg">
          <span className="sr-only">Records</span>
          <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1605_3070)">
            <path d="M6.26649 0.211304C4.31521 0.211304 2.72876 1.48848 2.72876 3.05935V13.0275H8.91979C9.25698 13.0275 9.561 13.1788 9.71025 13.4191L10.6887 14.9945L13.4359 10.5711C13.5852 10.3308 13.8947 10.1795 14.2264 10.1795C14.5581 10.1795 14.8676 10.3308 15.0169 10.5711L16.5425 13.0275H20.4174C20.9039 13.0275 21.3019 13.3479 21.3019 13.7395C21.3019 14.1312 20.9039 14.4516 20.4174 14.4516H15.9953C15.6581 14.4516 15.354 14.3003 15.2048 14.0599L14.2264 12.4846L11.4791 16.908C11.3299 17.1483 11.0203 17.2996 10.6887 17.2996C10.357 17.2996 10.0474 17.1483 9.89819 16.908L8.37255 14.4516H2.72876V20.1477C2.72876 21.7185 4.31521 22.9957 6.26649 22.9957H20.4174C22.3687 22.9957 23.9552 21.7185 23.9552 20.1477V7.33143H16.8797C15.9013 7.33143 15.1108 6.69507 15.1108 5.9074V0.211304H6.26649ZM16.8797 0.211304V5.9074H23.9552L16.8797 0.211304Z" fill="#6495ED"/>
            </g>
            <defs>
            <clipPath id="clip0_1605_3070">
            <rect width="24.7641" height="22.7844" fill="white" transform="translate(0.959961 0.211304)"/>
            </clipPath>
            </defs>
            </svg>
             <div className="text-blue-600 text-lg ml-2" >Records</div>
        </a>
        <a href="./tasks.html" className="mr-3 inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-100 focus:bg-gray-200  rounded-lg">
          <span className="sr-only">Tasks</span>
          <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1605_3084)">
            <path d="M8.31687 1.84002C8.79571 2.23608 8.8344 2.90804 8.40393 3.3486L4.92147 6.90866C4.70866 7.12672 4.40878 7.25577 4.08955 7.26022C3.77033 7.26467 3.46561 7.15342 3.23829 6.94871L1.29875 5.16868C0.848937 4.75038 0.848937 4.07396 1.29875 3.65566C1.74857 3.23735 2.48859 3.23735 2.93841 3.65566L4.00733 4.63912L6.67238 1.91567C7.10285 1.47512 7.83319 1.43952 8.31203 1.83557L8.31687 1.84002ZM8.31687 8.96015C8.79571 9.35621 8.8344 10.0282 8.40393 10.4687L4.92147 14.0288C4.70866 14.2468 4.40878 14.3759 4.08955 14.3803C3.77033 14.3848 3.46561 14.2735 3.23829 14.0688L1.29875 12.2888C0.8441 11.8705 0.8441 11.1941 1.29875 10.7802C1.75341 10.3664 2.48859 10.3619 2.93841 10.7802L4.00733 11.7637L6.67238 9.04025C7.10285 8.59969 7.83319 8.56409 8.31203 8.96015H8.31687ZM11.7945 4.41217C11.7945 3.62451 12.4861 2.98814 13.3422 2.98814H24.1765C25.0326 2.98814 25.7243 3.62451 25.7243 4.41217C25.7243 5.19983 25.0326 5.83619 24.1765 5.83619H13.3422C12.4861 5.83619 11.7945 5.19983 11.7945 4.41217ZM11.7945 11.5323C11.7945 10.7446 12.4861 10.1083 13.3422 10.1083H24.1765C25.0326 10.1083 25.7243 10.7446 25.7243 11.5323C25.7243 12.32 25.0326 12.9563 24.1765 12.9563H13.3422C12.4861 12.9563 11.7945 12.32 11.7945 11.5323ZM8.69897 18.6524C8.69897 17.8648 9.39062 17.2284 10.2467 17.2284H24.1765C25.0326 17.2284 25.7243 17.8648 25.7243 18.6524C25.7243 19.4401 25.0326 20.0764 24.1765 20.0764H10.2467C9.39062 20.0764 8.69897 19.4401 8.69897 18.6524ZM3.28182 16.5164C3.89755 16.5164 4.48807 16.7414 4.92346 17.142C5.35885 17.5426 5.60346 18.0859 5.60346 18.6524C5.60346 19.2189 5.35885 19.7622 4.92346 20.1628C4.48807 20.5634 3.89755 20.7885 3.28182 20.7885C2.66608 20.7885 2.07556 20.5634 1.64017 20.1628C1.20478 19.7622 0.960182 19.2189 0.960182 18.6524C0.960182 18.0859 1.20478 17.5426 1.64017 17.142C2.07556 16.7414 2.66608 16.5164 3.28182 16.5164Z" fill="#6495ED"/>
            </g>
            <defs>
            <clipPath id="clip0_1605_3084">
            <rect width="24.7641" height="22.7844" fill="white" transform="translate(0.959961 0.140106)"/>
            </clipPath>
            </defs>
            </svg>
            <div className="text-blue-600 text-lg ml-2">Tasks</div>
        </a>
        <a href="./adminClient.html" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-100 focus:bg-gray-200  rounded-lg">
          <span className="sr-only">Agents</span>
          <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1605_3076)">
            <path d="M7.08908 0.0752716C7.99216 0.0752716 8.85825 0.450349 9.49683 1.11799C10.1354 1.78563 10.4941 2.69115 10.4941 3.63533C10.4941 4.57952 10.1354 5.48504 9.49683 6.15268C8.85825 6.82032 7.99216 7.1954 7.08908 7.1954C6.186 7.1954 5.31991 6.82032 4.68134 6.15268C4.04276 5.48504 3.68401 4.57952 3.68401 3.63533C3.68401 2.69115 4.04276 1.78563 4.68134 1.11799C5.31991 0.450349 6.186 0.0752716 7.08908 0.0752716ZM22.7524 0.0752716C23.6555 0.0752716 24.5216 0.450349 25.1601 1.11799C25.7987 1.78563 26.1575 2.69115 26.1575 3.63533C26.1575 4.57952 25.7987 5.48504 25.1601 6.15268C24.5216 6.82032 23.6555 7.1954 22.7524 7.1954C21.8493 7.1954 20.9832 6.82032 20.3446 6.15268C19.7061 5.48504 19.3473 4.57952 19.3473 3.63533C19.3473 2.69115 19.7061 1.78563 20.3446 1.11799C20.9832 0.450349 21.8493 0.0752716 22.7524 0.0752716ZM0.959961 13.3677C0.959961 10.7466 2.99449 8.61942 5.50147 8.61942H7.31892C7.99568 8.61942 8.63839 8.77518 9.21725 9.05108C9.16192 9.37149 9.13638 9.70524 9.13638 10.0434C9.13638 11.7434 9.85144 13.2698 10.9794 14.3155C10.9709 14.3155 10.9623 14.3155 10.9496 14.3155H1.86656C1.36857 14.3155 0.959961 13.8883 0.959961 13.3677ZM18.2109 14.3155C18.2024 14.3155 18.1939 14.3155 18.1811 14.3155C19.3133 13.2698 20.0241 11.7434 20.0241 10.0434C20.0241 9.70524 19.9943 9.37594 19.9432 9.05108C20.5221 8.77073 21.1648 8.61942 21.8415 8.61942H23.659C26.166 8.61942 28.2005 10.7466 28.2005 13.3677C28.2005 13.8928 27.7919 14.3155 27.2939 14.3155H18.2109ZM10.4941 10.0434C10.4941 8.91042 10.9246 7.8238 11.6909 7.02263C12.4572 6.22147 13.4965 5.77137 14.5802 5.77137C15.6639 5.77137 16.7032 6.22147 17.4695 7.02263C18.2358 7.8238 18.6663 8.91042 18.6663 10.0434C18.6663 11.1765 18.2358 12.2631 17.4695 13.0643C16.7032 13.8654 15.6639 14.3155 14.5802 14.3155C13.4965 14.3155 12.4572 13.8654 11.6909 13.0643C10.9246 12.2631 10.4941 11.1765 10.4941 10.0434ZM6.40807 21.6715C6.40807 18.3962 8.9491 15.7395 12.0818 15.7395H17.0787C20.2114 15.7395 22.7524 18.3962 22.7524 21.6715C22.7524 22.3257 22.2459 22.8597 21.6159 22.8597H7.54451C6.91883 22.8597 6.40807 22.3301 6.40807 21.6715Z" fill="#6495ED"/>
            </g>
            <defs>
            <clipPath id="clip0_1605_3076">
            <rect width="27.2405" height="22.7844" fill="white" transform="translate(0.959961 0.0752716)"/>
            </clipPath>
            </defs>
            </svg>
            <div className="text-blue-600 text-lg ml-2">Agents</div>
        </a>
        <a href="./adminDashboardTeam.html" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-100 focus:bg-gray-200  rounded-lg">
          <span className="sr-only">Team</span>
          <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.0605 15.1874C29.1843 14.4948 29.1843 13.7875 29.0605 13.0949L30.2886 12.3631C30.4314 12.2796 30.4933 12.1077 30.4457 11.9456C30.1268 10.8846 29.5794 9.92192 28.8654 9.12621C28.7559 9.00341 28.5797 8.97394 28.4369 9.05744L27.2088 9.7893C26.69 9.3325 26.095 8.97885 25.4523 8.74308V7.27937C25.4523 7.11236 25.3381 6.96501 25.181 6.93063C24.1195 6.68504 23.039 6.69486 22.0298 6.93063C21.8727 6.96501 21.7585 7.11236 21.7585 7.27937V8.74308C21.1159 8.97885 20.5209 9.3325 20.002 9.7893L18.7739 9.05744C18.6359 8.97394 18.455 9.00341 18.3455 9.12621C17.6315 9.92192 17.0841 10.8846 16.7651 11.9456C16.7175 12.1077 16.7842 12.2796 16.9222 12.3631L18.1503 13.0949C18.0266 13.7875 18.0266 14.4948 18.1503 15.1874L16.9222 15.9192C16.7794 16.0027 16.7175 16.1747 16.7651 16.3367C17.0841 17.3977 17.6315 18.3555 18.3455 19.1561C18.455 19.2789 18.6311 19.3084 18.7739 19.2249L20.002 18.493C20.5209 18.9498 21.1159 19.3035 21.7585 19.5392V21.003C21.7585 21.17 21.8727 21.3173 22.0298 21.3517C23.0913 21.5973 24.1719 21.5875 25.181 21.3517C25.3381 21.3173 25.4523 21.17 25.4523 21.003V19.5392C26.095 19.3035 26.69 18.9498 27.2088 18.493L28.4369 19.2249C28.575 19.3084 28.7559 19.2789 28.8654 19.1561C29.5794 18.3604 30.1268 17.3977 30.4457 16.3367C30.4933 16.1747 30.4267 16.0027 30.2886 15.9192L29.0605 15.1874ZM23.6102 16.5234C22.3345 16.5234 21.3015 15.4526 21.3015 14.1412C21.3015 12.8297 22.3392 11.7589 23.6102 11.7589C24.8811 11.7589 25.9188 12.8297 25.9188 14.1412C25.9188 15.4526 24.8859 16.5234 23.6102 16.5234ZM4.56971 9.42583C6.25003 9.42583 7.61619 8.01614 7.61619 6.28227C7.61619 4.5484 6.25003 3.13871 4.56971 3.13871C2.88939 3.13871 1.52324 4.5484 1.52324 6.28227C1.52324 8.01614 2.88939 9.42583 4.56971 9.42583ZM15.2324 10.9976C15.3228 10.9976 15.4085 10.973 15.4989 10.9681C15.894 9.90227 16.4748 8.90026 17.2269 8.06034C17.5791 7.6674 18.0789 7.44145 18.6025 7.44145C18.931 7.44145 19.2547 7.52987 19.5355 7.70178L19.9116 7.92772C19.9497 7.90316 19.9877 7.88352 20.0258 7.85896C20.359 7.14183 20.5589 6.34612 20.5589 5.50129C20.5589 2.46088 18.1741 6.10352e-05 15.2276 6.10352e-05C12.2811 6.10352e-05 9.90104 2.45597 9.90104 5.49638C9.90104 8.53679 12.2859 10.9976 15.2324 10.9976ZM20.24 20.5511C20.1305 20.4921 20.0211 20.4234 19.9163 20.3595C19.526 20.5953 19.188 20.8409 18.6073 20.8409C18.0884 20.8409 17.5886 20.6149 17.2316 20.222C16.3605 19.2494 15.6941 18.0657 15.3181 16.8034C14.8087 15.1088 16.5033 14.3622 16.5462 14.3327C16.5414 14.205 16.5414 14.0773 16.5462 13.9496L16.1701 13.7237C15.9892 13.6156 15.8369 13.4781 15.7036 13.3258C15.5465 13.3356 15.3942 13.3553 15.2371 13.3553C14.0661 13.3553 12.9713 13.0606 11.9765 12.5694H11.5814C8.54917 12.5694 6.09295 15.1039 6.09295 18.2278V19.6424C6.09295 20.944 7.11638 22.0001 8.37781 22.0001H20.5351C20.359 21.7054 20.24 21.3713 20.24 21.003V20.5511ZM8.23976 11.9112C7.68759 11.3463 6.93073 10.9976 6.09295 10.9976H3.04648C1.36615 10.9976 0 12.4073 0 14.1412V15.7129C0 16.5823 0.680697 17.2847 1.52324 17.2847H4.66016C4.96004 14.9565 6.32144 12.9967 8.23976 11.9112Z" fill="#6495ED"/>
            </svg> 
            <div className="text-blue-600 text-lg px-2" >Team</div>           
        </a>
    </nav>
    </div>
     <div className="items-center justify-center h-20 border-t border-gray-700 flex flex-col">   
        <a href="./settings.html" class="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-100 focus:bg-gray-200  rounded-lg">
          <span class="sr-only">Settings</span>
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1605_3080)">
            <path d="M21.2065 7.69205C21.3434 8.07921 21.2279 8.51087 20.9329 8.78677L19.0812 10.5401C19.1282 10.9095 19.1539 11.2877 19.1539 11.6704C19.1539 12.0531 19.1282 12.4314 19.0812 12.8007L20.9329 14.5541C21.2279 14.83 21.3434 15.2616 21.2065 15.6488C21.0184 16.1784 20.7917 16.6857 20.5309 17.1752L20.3299 17.5356C20.0476 18.0251 19.7312 18.4879 19.3848 18.9241C19.1325 19.2445 18.7134 19.3513 18.3371 19.2267L15.9551 18.439C15.3821 18.8974 14.7492 19.2801 14.0735 19.5693L13.539 22.1103C13.4535 22.5153 13.1541 22.8357 12.7607 22.9024C12.1705 23.0048 11.5633 23.0582 10.9432 23.0582C10.3231 23.0582 9.71589 23.0048 9.12575 22.9024C8.73232 22.8357 8.43298 22.5153 8.34745 22.1103L7.8129 19.5693C7.13723 19.2801 6.50433 18.8974 5.93129 18.439L3.55362 19.2311C3.17729 19.3557 2.75821 19.2445 2.5059 18.9285C2.15951 18.4924 1.84306 18.0296 1.56082 17.5401L1.35983 17.1796C1.09897 16.6901 0.872322 16.1828 0.684161 15.6532C0.547316 15.2661 0.662779 14.8344 0.95785 14.5585L2.80953 12.8052C2.76249 12.4314 2.73683 12.0531 2.73683 11.6704C2.73683 11.2877 2.76249 10.9095 2.80953 10.5401L0.95785 8.78677C0.662779 8.51087 0.547316 8.07921 0.684161 7.69205C0.872322 7.16249 1.09897 6.65518 1.35983 6.16568L1.56082 5.80522C1.84306 5.31571 2.15951 4.8529 2.5059 4.41679C2.75821 4.09639 3.17729 3.98959 3.55362 4.11419L5.93557 4.90185C6.5086 4.44349 7.14151 4.06079 7.81718 3.77153L8.35173 1.23054C8.43725 0.825581 8.7366 0.505175 9.13003 0.438424C9.72017 0.331622 10.3274 0.278221 10.9475 0.278221C11.5676 0.278221 12.1748 0.331622 12.765 0.433974C13.1584 0.500725 13.4577 0.821131 13.5433 1.22609L14.0778 3.76708C14.7535 4.05634 15.3864 4.43904 15.9594 4.8974L18.3414 4.10974C18.7177 3.98514 19.1368 4.09639 19.3891 4.41234C19.7355 4.84845 20.0519 5.31126 20.3342 5.80077L20.5352 6.16122C20.796 6.65073 21.0227 7.15804 21.2108 7.6876L21.2065 7.69205ZM10.9475 15.2305C11.8548 15.2305 12.725 14.8554 13.3666 14.1878C14.0082 13.5201 14.3686 12.6146 14.3686 11.6704C14.3686 10.7262 14.0082 9.82072 13.3666 9.15308C12.725 8.48544 11.8548 8.11036 10.9475 8.11036C10.0402 8.11036 9.16998 8.48544 8.5284 9.15308C7.88682 9.82072 7.52638 10.7262 7.52638 11.6704C7.52638 12.6146 7.88682 13.5201 8.5284 14.1878C9.16998 14.8554 10.0402 15.2305 10.9475 15.2305Z" fill="#6495ED"/>
            </g>
            <defs>
            <clipPath id="clip0_1605_3080">
            <rect width="21.8951" height="22.7844" fill="white" transform="translate(0 0.278221)"/>
            </clipPath>
            </defs>
            </svg>         
            <div class="text-blue-600 text-lg ml-2">Settings</div>  
        </a>
        <Link to="/" class="inline-flex items-center justify-center hover:text-gray-400 hover:bg-gray-100 focus:bg-gray-200  rounded-lg">
            <span class="sr-only">Log out</span>
            <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9171 21.9835C17.9076 22.4648 17.8304 22.9385 17.69 23.3765C17.5496 23.8144 17.349 24.2077 17.0999 24.5329C16.8509 24.8581 16.5585 25.1087 16.2402 25.2696C15.922 25.4306 15.5842 25.4987 15.2472 25.4699C13.1415 25.4867 11.0358 25.4699 8.93017 25.4699C8.80048 25.4699 8.67609 25.3965 8.58439 25.2657C8.49268 25.1349 8.44116 24.9576 8.44116 24.7726C8.44116 24.5877 8.49268 24.4103 8.58439 24.2796C8.67609 24.1488 8.80048 24.0753 8.93017 24.0753C11.0818 24.0753 13.2334 24.12 15.3851 24.0753C16.4677 24.053 16.9391 22.8927 16.9391 21.5121V4.13142C16.9467 3.69249 16.8601 3.26074 16.6909 2.8939C16.5217 2.52706 16.278 2.24261 15.9924 2.07859C15.6547 1.94719 15.3034 1.90234 14.9547 1.94611H8.93017C8.80048 1.94611 8.67609 1.87264 8.58439 1.74187C8.49268 1.61111 8.44116 1.43375 8.44116 1.24882C8.44116 1.06388 8.49268 0.886524 8.58439 0.755756C8.67609 0.624989 8.80048 0.551525 8.93017 0.551525C11.1053 0.551525 13.297 0.432985 15.4701 0.551525C15.8029 0.563526 16.1307 0.669782 16.4344 0.864111C16.7382 1.05844 17.0118 1.33696 17.2393 1.68347C17.4668 2.02997 17.6437 2.43754 17.7598 2.88246C17.8758 3.32738 17.9286 3.80076 17.9152 4.27506L17.9171 21.9835Z" fill="#6495ED"/>
              <path d="M0.516311 12.5211C0.433681 12.6353 0.385307 12.7908 0.381346 12.9548C0.381346 12.9757 0.381346 12.9938 0.375478 13.0148C0.369609 13.0357 0.375478 13.0524 0.381346 13.0719C0.385259 13.2364 0.433621 13.3923 0.516311 13.507L4.10464 18.6238C4.19687 18.7508 4.32039 18.8211 4.44861 18.8195C4.57682 18.8179 4.69947 18.7446 4.79014 18.6153C4.8808 18.486 4.93223 18.3111 4.93335 18.1283C4.93446 17.9455 4.88517 17.7693 4.79609 17.6378L2.04299 13.7107H12.5488C12.6785 13.7107 12.8029 13.6372 12.8946 13.5064C12.9863 13.3757 13.0378 13.1983 13.0378 13.0134C13.0378 12.8284 12.9863 12.6511 12.8946 12.5203C12.8029 12.3895 12.6785 12.3161 12.5488 12.3161H2.04299L4.79609 8.38892C4.88517 8.25741 4.93446 8.08127 4.93335 7.89845C4.93223 7.71562 4.8808 7.54073 4.79014 7.41145C4.69947 7.28216 4.57682 7.20883 4.44861 7.20724C4.32039 7.20565 4.19687 7.27594 4.10464 7.40295L0.516311 12.5211Z" fill="#6495ED"/>
            </svg>       
          <div class=" text-blue-600 text-lg ml-2" >Log Out</div>           
      </Link>      
    </div>
  </aside>
  {/* <!-- end of sidebar navigation --> */}
{/* 
<!-- hamburger menu --> */}
<div className="flex-grow text-gray-800 bg-blue-100">
  <header className="flex items-center h-20 px-6 sm:px-10 ">
    <button class="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
      <span class="sr-only">Menu</span>
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
    </button>
      {/* <!-- hamburger menu --> */}

      {/* <!-- dashboard header --> */}
    <div class="flex flex-col md:flex-row md:justify-between items-center md:items-end md:gap-8 lg:gap-96">
      <div id="greetings" class="flex flex-shrink-0 md:text-3xl font-semibold mb-2">Welcome Back Mike</div>
            
      <div class="flex space-x-3 md:ml-60">
            
        {/* <!-- Notification icons --> */}
        {/* <!-- <div class="border-l pl-3 ml-3 space-x-1"> --> */}
          <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span class="sr-only">Message Notifications</span>
              <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <svg width="29" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.83333 2.83333H25.5V19.8333H4.49083L2.83333 21.4908V2.83333ZM2.83333 0C1.275 0 0.0141667 1.275 0.0141667 2.83333L0 28.3333L5.66667 22.6667H25.5C27.0583 22.6667 28.3333 21.3917 28.3333 19.8333V2.83333C28.3333 1.275 27.0583 0 25.5 0H2.83333ZM5.66667 14.1667H22.6667V17H5.66667V14.1667ZM5.66667 9.91667H22.6667V12.75H5.66667V9.91667ZM5.66667 5.66667H22.6667V8.5H5.66667V5.66667Z" fill="#111111"/>
              </svg>
          </button>
          
          <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span class="sr-only">Bell Notifications</span>
              <span class="absolute top-1 right-0 h-2 w-2 mt-1 mr-3 bg-red-500 rounded-full"></span>
              <span class="absolute top-1 right-0 h-2 w-2 mt-1 mr-3 bg-red-500 rounded-full animate-ping"></span>
              <svg width="29" height="24" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31 27.1003L30.6463 26.7918C29.6429 25.9081 28.7646 24.8947 28.0352 23.7789C27.2386 22.2391 26.7612 20.5576 26.6309 18.8329V13.7532C26.6266 13.1362 26.571 12.5206 26.4644 11.9126C24.7023 11.5546 23.1195 10.6057 21.984 9.22651C20.8485 7.84734 20.23 6.12267 20.2332 4.34447C20.2332 4.12853 20.2332 3.9126 20.2332 3.69666C19.1471 3.16832 17.9802 2.82088 16.7795 2.66838V1.37275C16.7795 1.00867 16.6332 0.65951 16.3728 0.402069C16.1123 0.144629 15.7591 0 15.3908 0C15.0225 0 14.6692 0.144629 14.4088 0.402069C14.1483 0.65951 14.002 1.00867 14.002 1.37275V2.71979C11.3137 3.09466 8.85328 4.41825 7.0751 6.4462C5.29691 8.47416 4.32099 11.0696 4.32752 13.7532V18.8329C4.19723 20.5576 3.71977 22.2391 2.92315 23.7789C2.20629 24.8919 1.34215 25.9051 0.353691 26.7918L0 27.1003V30H31V27.1003Z" fill="#111111"/>
              </svg>
          </button>
          
          <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span class="sr-only">Profile Picture</span>
              <img src="https://tinyurl.com/48ffmsy8" alt="User" class="h-7 w-7" />
          </button>
      </div>
  </div>  
</header>

    <section className="container max-w-5xl mx-auto flex flex-col justify-center items-center m-8">

          <div className="grid grid-cols-4 gap-8 mb-6">
            <SalesBox title="Sales" price="456700"growth="+2.5%" />
            <SalesBox title="Clients" price="450"growth="-2.5%" />
            <SalesBox title="Conversion" price="456700"growth="+2.5%" />
            <SalesBox title="Claims" price="16700"growth="-0.5%" />
          </div>
  

     
        <div className='flex justify-evenly mx-auto w-full'>
            <div className="w-[48%] px-5 bg-white py-20 items-center">
            <BarChart chartData={chartData} topic={"Monthly Revenue"}/>
            </div>

            <div className="w-[48%] bg-white">
            <PieChart chartData={chartData}/>
            </div>
        </div>


        <Track topic={"Recent Sales"} />
    </section>
</div>

</body>


    </div>
  )
}

export default AdminHome
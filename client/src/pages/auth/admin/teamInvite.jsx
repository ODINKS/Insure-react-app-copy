import { Link } from "react-router-dom";
import BUTTON from "../../../components/molecules/global/Button";

const TeamInvite = () => {
  return (
    <main className="flex justify-between p-3 gap-5">
      <div className="flex-1 pl-10">
        <div className="logo mb-3">
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="INSURE LOGO"
            className="scale-50	"
          />
        </div>
        <div className="flex justify-between w-full">
          <p>
            Invite <span className="text-[#e76927]">agents</span>
          </p>
          <Link to="/">Skip for later</Link>
        </div>
        <div className="flex items-center bg-[#e76927] rounded-md text-white  w-max mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 translate-x-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>

          <BUTTON description="Add another" className="hover:bg-none" />
        </div>

        <div className="flex flex-col gap-3 p-1">
          <input
            type="email"
            className="px-2 py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none"
            placeholder="Add email address"
          />
          <input
            type="email"
            className="px-2 py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none"
            placeholder="Add email address"
          />
          <input
            type="email"
            className="px-2 py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none"
            placeholder="Add email address"
          />
        </div>

        <div className="fixed bottom-[15px] flex gap-5">
          <Link to="/" className="bg-[#e76927] px-5 py-3 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>

          <Link to="/" className="bg-[#e76927] px-5 py-3 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div
        className="flex-1 h-[90vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("https://tinyurl.com/ycyaeaun")',
        }}
      ></div>
    </main>
  );
};

export default TeamInvite;

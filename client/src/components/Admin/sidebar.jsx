import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaLifeRing,
  FaCommentDots,
  FaSignOutAlt,
  FaPlus,
} from "react-icons/fa";

//   const handleLogout = async () => {
//     const res = await api.get("/auth/logout");
//     setUser("");
//     navigate("/");
//   };

const Sidebar = ({ active, setActive }) => {
  return (
    <div>
      <div className="bg-[#afc5e2] ">
        <div className="w-90  min-h-[100vh] p-5 flex flex-col justify-between  bg-amber-100">
          <div>
            <div className="border-b-2 pb-3 h-fit flex justify-center">
              <span className="text-2xl font-bold">Admin Dashboard</span>
            </div>

            <div className="py-8 px-5">
              <ul className="grid gap-2">
                <li
                  className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-700 hover:text-white cursor-pointer ${
                    active === "overview" && "bg-amber-600 text-white "
                  }`}
                  onClick={() => setActive("overview")}
                >
                  <FaTachometerAlt /> Overview
                </li>
                <li
                  className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-700 hover:text-white cursor-pointer ${
                    active === "addsubadmin" && "bg-amber-600 text-white"
                  }`}
                  onClick={() => setActive("addsubadmin")}
                >
                  <FaUser /> Add SubAdmin
                </li>
                <li
                  className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-700 hover:text-white cursor-pointer ${
                    active === "bookings" && "bg-amber-600 text-white"
                  }`}
                  onClick={() => setActive("bookings")}
                >
                  <FaCalendarCheck /> Suspend ID
                </li>
                <li
                  className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-700 hover:text-white cursor-pointer ${
                    active === "addpost" && "bg-amber-600 text-white"
                  }`}
                  onClick={() => setActive("addpost")}
                >
                  <FaPlus />Add new post
                </li>
                <li
                  className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-blue-700 hover:text-white cursor-pointer ${
                    active === "feedback" && "bg-amber-600 text-white"
                  }`}
                  onClick={() => setActive("feedback")}
                >
                  <FaCommentDots /> Queries
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button
              className="text-xl text-red-500 font-bold w-8/9 h-full border border-red-500 py-3  
            rounded-lg flex gap-2 items-center justify-center hover:bg-red-500 hover:text-white hover:scale-105 mx-auto cursor-pointer"
              // onClick={handleLogout}
            >
              Logout
              <FaSignOutAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

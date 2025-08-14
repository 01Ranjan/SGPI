import React, { useState } from "react";
import {Link} from "react-router-dom"


const AdminOverview = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard((prev) => (prev === card ? null : card)); // toggle
  };

  const renderCardDetails = () => {
    if (!selectedCard) return null;

    switch (selectedCard) {
      case "subadmins":
        return (
          <div className="w-full">
          <table className="min-w-full border border-gray-200 ">
            <thead>
              <tr>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">ID</th>
                <th className="px-4 py-2 w-2/4 text-left text-sm font-bold text-gray-600 border-b">Name</th>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">Department</th>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">Actions</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">unique123</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">Ravi Kumar</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">Defence</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        );
      case "articles":
        return (
          <div className="w-full">
          <table className="min-w-full border border-gray-200 ">
            <thead>
              <tr>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">Department</th>
                <th className="px-4 py-2 w-2/4 text-left text-sm font-bold text-gray-600 border-b">Title</th>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">Posted by</th>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">View</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">Education</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">Education new policy</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">Rajiv sharma</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">
                  <Link
                    to="/readmore"
                    className="mt-4 text-blue-600 hover:underline text-sm font-medium"
                  >
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        );
      case "pending":
        return (
          <div className="w-full">
          <table className="min-w-full border border-gray-200 ">
            <thead>
              <tr>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">ID</th>
                <th className="px-4 py-2 w-2/4 text-left text-sm font-bold text-gray-600 border-b">Title</th>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">Department</th>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">Actions</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">unique123</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">New education policy</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">Education</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">
                  <button className="text-blue-500 hover:underline mr-2">Reject</button>
                  <button className="text-red-500 hover:underline">Approve</button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        );
      case "divisions":
        return (
          <div className="w-full">
          <table className="min-w-full border border-gray-200 ">
            <thead>
              <tr>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">Sub admin id</th>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">No of Division</th>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">NO of active members</th>
                <th className="px-4 py-2 w-1/4 text-left text-sm font-bold text-gray-600 border-b">Past members</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">unque@123</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">23</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">24</td>
                <td className="px-4 py-2 w-1/4 text-left text-sm font-medium text-gray-600 border-b">13</td>
              </tr>
            </tbody>
          </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* First Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard - Overview</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search something..."
              className="flex-1 px-6 py-2 text-gray-700 focus:outline-none"
            />
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition">
              <i className="bx bx-search text-xl"></i>
            </button>
          </div>
          <select className="border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>select Department</option>
            <option>Health</option>
            <option>Defence</option>
            <option>Agriculture</option>
            <option>Education</option>
          </select>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
        <div
          onClick={() => handleCardClick("subadmins")}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h3 className="text-gray-500 text-sm">Total Subadmins</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div
          onClick={() => handleCardClick("articles")}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h3 className="text-gray-500 text-sm">Total Articles</h3>
          <p className="text-2xl font-bold">245</p>
        </div>
        <div
          onClick={() => handleCardClick("pending")}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h3 className="text-gray-500 text-sm">Pending Approvals</h3>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div
          onClick={() => handleCardClick("divisions")}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h3 className="text-gray-500 text-sm">Total Divisions</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>

      {/* Card Details (expands below cards) */}
      {renderCardDetails()}

      {/* Third Row */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-3">
            <p className="text-sm">
              <strong>ID: SUB-1023</strong> — Added an article in Defence
            </p>
            <span className="text-xs text-gray-400">2 hours ago</span>
          </li>
          <li className="py-3">
            <p className="text-sm">
              <strong>ID: SUB-2045</strong> — Approved the article “Budget 2025”
            </p>
            <span className="text-xs text-gray-400">5 hours ago</span>
          </li>
          <li className="py-3">
            <p className="text-sm">
              <strong>ID: SUB-3087</strong> — Registered as a new subadmin
            </p>
            <span className="text-xs text-gray-400">1 day ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminOverview;

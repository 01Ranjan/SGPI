import React from "react";
import { toast } from "react-hot-toast";
import api from "../../config/api";
import { useState } from "react";

function RegisterPopup({ isopen, onClose, formData }) {
<<<<<<< HEAD
  if (!isopen) {return null};
  
=======
  const [adminRequiredData, setAdminRequiredData] = useState({
    uniqueId:"",
    password:"",
    otp:"",
  });
  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setAdminRequiredData((prev) => ({ ...prev, [name]: value }));
  };
  const handalSubbmitFinalRegistation = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);

      const res = await api.post("/admin/addsubadmin", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message);
    } catch (error) {}
  };

  if (!isopen) {
    return null;
  }
>>>>>>> 6f46421938c6fc6db89945412082bbf8c6900d26

  return (
    <div className="fixed inset-0  bg-black/80 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full">
        <button
          className="relative left-11/12 bx bx-x-cicle cursor-pointer"
          onClick={onClose}
        >
          <i className="bx bx-x text-xl" onClick={onClose}></i>
        </button>
        <form onSubmit={handalSubbmitFinalRegistation}>
          {/* Unique ID */}
          <div>
            <label className="block text-gray-700 mb-1">Unique ID</label>
            <input
              type="text"
              name="uniqueId"
              value={adminRequiredData.uniqueId}
              onChange={handlePopupChange}
              placeholder="Enter your unique ID"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={adminRequiredData.password}
              onChange={handlePopupChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* OTP */}
          <div className="flex justify-between w-full gap-4 mb-4 align-baseline">
            <div>
              <label className="block text-gray-700 mb-1">OTP</label>
              <input
                type="text"
                name="otp"
                value={adminRequiredData.otp}
                onChange={handlePopupChange}
                placeholder="Enter OTP"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            {/* send otp button */}
            <button
              type="submit"
              className="w-52 h-10  shadow-[#9f8f8f] shadow-[0px_3px_5px_2px] bg-blue-600 text-white mt-7 rounded-lg hover:bg-blue-700 transition duration-200 active:scale-95"
            >
              Send OTP
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full shadow-[#9f8f8f] shadow-[0px_3px_5px_2px] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 active:scale-95 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPopup;

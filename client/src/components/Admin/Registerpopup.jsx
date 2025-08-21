import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../config/api";

function RegisterPopup({ isopen, onClose, NewAdminData, adminPhoto }) {
  const [adminRequiredData, setAdminRequiredData] = useState({
    uniqueId: "",
    password: "",
    otp: "",
  });

  console.log(NewAdminData, adminPhoto);

  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setAdminRequiredData((prev) => ({ ...prev, [name]: value }));
  };

  // Send OTP
  const handalOtp = async () => {
    if (!adminRequiredData.uniqueId || !adminRequiredData.password) {
      toast.error("Please enter Unique ID and Password first");
      return;
    }

    try {
      console.log(adminRequiredData);

      const res = await api.post("/admin/sendotp", {
        uniqueId: adminRequiredData.uniqueId,
        password: adminRequiredData.password,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send OTP");
    }
  };

  // Final Registration Submit
  // const handleSubmitFinalRegistration = async (e) => {
  //   e.preventDefault();

  //   if (!adminRequiredData.otp) {
  //     toast.error("Please enter OTP before submitting");
  //     return;
  //   }

  //   try {
  //     formData.append("otp", adminRequiredData.otp);
  //     const res = await api.post("/admin/addsubadmin", formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     toast.success(res.data.message);
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message || "Failed to register");
  //   }
  // };
  const handleSubmitFinalRegistration = async (e) => {
    e.preventDefault();

    if (!adminRequiredData.otp) {
      toast.error("Please enter OTP before submitting");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fullName", NewAdminData.fullName);
      formData.append("dob", NewAdminData.dob);
      formData.append("gender", NewAdminData.gender);
      formData.append("phone", NewAdminData.phone);
      formData.append("email", NewAdminData.email);
      formData.append("address", NewAdminData.address);
      formData.append("post", NewAdminData.post);
      formData.append("idNumbers", NewAdminData.idNumber);
      formData.append("departmentIdNumber", NewAdminData.departmentIdNumber);
      formData.append("password", NewAdminData.password);
      formData.append("otp", adminRequiredData.otp);

      if (adminPhoto) {
        formData.append("idPhotos", adminPhoto);
      }

      const res = await api.post("/admin/addsubadmin", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error?.response?.data?.message || "Failed to register");
    }
  };

  if (!isopen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full">
        {/* Close Button */}
        <button className="relative  left-80" onClick={onClose}>
          <i className="bx bx-x text-2xl"></i>
        </button>

        <form onSubmit={handleSubmitFinalRegistration}>
          {/* Unique ID */}
          <div>
            <label className="block text-gray-700 mb-1">Unique ID</label>
            <input
              type="text"
              name="uniqueId"
              value={adminRequiredData.uniqueId}
              onChange={handlePopupChange}
              placeholder="Enter your unique ID"
              className="w-full border border-gray-300 rounded-lg p-2"
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
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          {/* OTP */}
          <div className="flex justify-between w-full gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">OTP</label>
              <input
                type="text"
                name="otp"
                value={adminRequiredData.otp}
                onChange={handlePopupChange}
                placeholder="Enter OTP"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <button
              type="button"
              onClick={handalOtp}
              className="w-40 h-10 bg-blue-600 text-white mt-7 rounded-lg hover:bg-blue-700 transition"
              disabled={adminRequiredData.otp}
            >
              Send OTP
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            onClick={handleSubmitFinalRegistration}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPopup;

import { useState } from "react";
import api from "../config/api";
import { toast } from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({
    uniqueId: "",
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handelOtp = async (e) => {
    e.preventDefault();
    

    try {
      const res = await api.post("/admin/sendloginotp", formData);
      toast.success(res.data.message);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const res = await api.post("/admin/login", formData);

      toast.success(res.data.message);
    } catch (error) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-green-300 via-blue-500 to-purple-600 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Portal Login
        </h2>

        <form className="space-y-4">
          {/* Unique ID */}
          <div>
            <label className="block text-gray-700 mb-1">Unique ID</label>
            <input
              type="text"
              name="uniqueId"
              value={formData.uniqueId}
              onChange={handleChange}
              placeholder="Enter your unique ID"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* OTP */}
          <div className="flex justify-between w-full gap-4 align-baseline">
            <div>
              <label className="block text-gray-700 mb-1">OTP</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter OTP"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            {/* send otp button */}
            <button
              type="submit"
              onClick={handelOtp}
              className="w-52 h-10 bg-blue-600 text-white mt-7 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Send OTP
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

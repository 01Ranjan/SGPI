import React, { useState } from "react";
import RegisterPopup from "../Admin/Registerpopup";
function AddSubAddmin() {
  const [IsOpean, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
    designation: "",
    idNumber: "",
    idImage: null,
    password: "",
    departmentId: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // prepare form data for sending (for file upload)
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
   setIsOpen(true)
    // example POST request
  };

  return (
    <div>
      {" "}
      <div className="  flex items-center justify-center p-8">
        <div className="bg-gradient-to-b from-rose-100 to-teal-100 grid  rounded-xl shadow-lg p-10 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
            Admin Registration
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center gap-14 w-full">
              <div>
                {/* Full Name */}
                <div>
                  <label className=" text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className=" text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className=" text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">-- Select Gender --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className=" text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile no"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                {/* email id */}
                <div>
                  <label className=" text-gray-700 ">Email Address</label>
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
              </div>
              <div>
                {/* Designation */}
                <div>
                  <label className=" text-gray-700">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Enter your designation"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                {/* Department ID */}
                <div>
                  <label className=" text-gray-700">Department ID</label>
                  <input
                    type="text"
                    name="departmentId"
                    value={formData.departmentId}
                    onChange={handleChange}
                    placeholder="Enter your department id"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* ID Number */}
                <div>
                  <label className=" text-gray-700">ID Number</label>
                  <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    placeholder="Enter your id number"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                {/* ID Image Upload */}
                <div>
                  <label className=" block text-gray-700">ID Image</label>
                  <input
                    type="file"
                    name="idImage"
                    accept="image/*"
                    onChange={handleChange}
                    className="cursor-pointer px-4 py-2 text-gray-500 font-medium border border-gray-300 rounded-lg shadow "
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className=" text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Make a strong password"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Register Admin
              </button>
            </div>
          </form>
        </div>
      </div>
      <RegisterPopup
        isopen={IsOpean}
        onClose={() => setIsOpen(false)}
        formData={formData}
      />
    </div>
  );
}

export default AddSubAddmin;

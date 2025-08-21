import React, { useState } from "react";
import RegisterPopup from "../Admin/Registerpopup";

function AddSubAddmin() {
  const [IsOpean, setIsOpen] = useState(false);
  const [photos, setPhotos] = useState(null);
  const formData = new FormData();

  const [subAdminData, setSubAdminData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    post: "",
    idNumber: "",
    password: "",
    departmentIdNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubAdminData({ ...subAdminData, [name]: value });
  };

  const handleImage = (e) => {
    setPhotos(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    setIsOpen(true);
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="bg-gradient-to-b from-rose-100 to-teal-100 grid rounded-xl shadow-lg p-10 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
          Admin Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center gap-14 w-full">
            {/* Left Side */}
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={subAdminData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border p-2 rounded-lg"
                required
              />

              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={subAdminData.dob}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
                required
              />

              <label>Gender</label>
              <select
                name="gender"
                value={subAdminData.gender}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
                required
              >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label>Mobile Number</label>
              <input
                type="tel"
                name="phone"
                value={subAdminData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile no"
                className="w-full border p-2 rounded-lg"
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={subAdminData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border p-2 rounded-lg"
                required
              />
            </div>

            {/* Right Side */}
            <div>
              <label>Designation</label>
              <input
                type="text"
                name="post"
                value={subAdminData.post}
                onChange={handleChange}
                placeholder="Enter your designation"
                className="w-full border p-2 rounded-lg"
                required
              />

              <label>Department ID</label>
              <input
                type="text"
                name="departmentIdNumber"
                value={subAdminData.departmentIdNumber}
                onChange={handleChange}
                placeholder="Enter your department id"
                className="w-full border p-2 rounded-lg"
                required
              />

              <label>ID Number</label>
              <input
                type="text"
                name="idNumber"
                value={subAdminData.idNumber}
                onChange={handleChange}
                placeholder="Enter your id number"
                className="w-full border p-2 rounded-lg"
                required
              />

              <label>ID Image</label>
              <input
                type="file"
                name="idImage"
                accept="image/*"
                onChange={handleImage}
                className="cursor-pointer border p-2 rounded-lg"
                required
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={subAdminData.password}
                onChange={handleChange}
                placeholder="Make a strong password"
                className="w-full border p-2 rounded-lg"
                required
              />
            </div>
          </div>

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

      {/* Popup */}

      <RegisterPopup
        isopen={IsOpean}
        onClose={() => setIsOpen(false)}
        NewAdminData={subAdminData}
        adminPhoto = {photos}
      />
    </div>
  );
}

export default AddSubAddmin;

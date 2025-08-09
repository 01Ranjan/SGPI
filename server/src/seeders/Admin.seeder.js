import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/dbConnection.js";
import Admin from "../model/Admins.model.js";
import bcrypt from "bcrypt";

const seedAdmin = async () => {
  await connectDB();
  console.log("database connecter ");
  
  const adminPassword = await bcrypt.hash("ketan@123", 10);
  const AdminUser = {
  fullName: "Admin User",
  dob: "1990-01-01", // example DOB, format depends on your needs
  gender: "Male",
  email: "ketankumar147856@gmail.com",
  phone: "9431897901",
  role: "Admin",
  idNumbers: ["ID123456789"], // array of strings
  departmentIdNumber: "DEPT001",
  post: "Chief Admin",
  uniqueId: "UNIQUE12345",
  idPhotos: ["https://placehold.co/600x400?text=A"], // array of strings
  password: adminPassword, // should be hashed before saving
  otpPassword: "", // temporary OTP
  otpPasswordTime: "", // or timestamp string
  subAdmin: [] // array of sub-admin IDs or names
}
;

  const existingAdmin = await Admin.findOne({ role: "Admin" });

  let admin;
  if (existingAdmin) {
    admin = await Admin.findByIdAndUpdate(existingAdmin._id, AdminUser, {
      new: true,
    });
    console.log("Admin User Updated Successfully", admin.email);
  } else {
    admin = await Admin.create(AdminUser);
    console.log("Admin User Created Successfully", admin.email);
  }

  process.exit(0);
};

seedAdmin();

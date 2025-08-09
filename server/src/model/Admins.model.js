import mongoose from "mongoose";

const AdminsSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Male",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "subAdmin"],
      default: "subAdmin",
      required: true,
    },
    idNumbers: {
      type: [String],
      required: true,
    },
    departmentIdNumber: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    uniqueId: {
      type: String,
      required: true,
    },
    idPhotos: {
      type: [String],
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    otpPassword: {
      type: String,
    
    },
    otpPasswordTime: {
      type: String,
      
    },
    subAdmin: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminsSchema);

export default Admin;

import Admin from "../model/Admins.model.js";
import generateToken from "../utils/authtoken.js";
import sendEmail from "../utils/sendemail.js"
import cloudinary from "../config/cloudinary.js";
import bcrypt from "bcrypt";

export const AdminLoginOtp = async (req, res, next) => {
  console.log(req.body);
  
  const { email, uniqueId, password } = req.body;
  if (!email || !uniqueId || !password) {
    const error = new Error("All filds are required");
    error.statusCode = 400;
    return next(error);
  }

  const otp = Math.floor(Math.random() * 9000) + 1000;
  const time = new Date().getTime();

  const isAdmin = await Admin.findOneAndUpdate(
    { email },
    {
      otpPassword: otp,
    },
    {otpPasswordTime:time}
  );

   const subject = "One-Time Password (OTP) for login";

    const mailBody = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2>Password Reset OTP</h2>
    <p>Hello,</p>
    <p>We received a request to reset your password. Please use the following One-Time Password (OTP) to complete the process:</p>
    <h1 style="color: #007BFF;">${otp}</h1>
    <p>This OTP is valid for the next 5 minutes. Do not share it with anyone.</p>
    <p>If you did not request this, please ignore this email.</p>
    <br/>
    <p>Regards,<br/>Your Company Team</p>
  </div>
`;

const MailStatus = await sendEmail(email, subject, mailBody);

    if (!isAdmin) {
      return res.status(404).json({ message: "Data  not found" });
    }

    
    res.json({ message: "OTP generated"});
};
export const AdminLogin=async(req,res,next)=>{
   try {
    const { email, uniqueId, password ,otp} = req.body;
  if (!email || !uniqueId || !password) {
    const error = new Error("All filds are required");
    error.statusCode = 400;
    return next(error);
  }
   if (!otp) {
      return res.status(404).json({ message: "please enter a valid OTP" });
    }
    const user = await Admin.findOne({ email: email });
       const otpValidDuration = 5 * 60 * 1000; 

    const timeDifference = new Date().getTime() - Admin.otpPasswordTime;

    if (timeDifference > otpValidDuration) {
      console.log("Time Difference:", timeDifference);
      return res.status(400).json({ message: "Your OTP Expired" });
    }
    
    
     if (user.otpPassword != otp) {
      return res.status(404).json({ message: "please enter valid OTP" });
    }

    const token = generateToken(user._id,user.role,res)

    res.status(200).json({ message: "login  sucessful" });
    console.log(token);
    
   } catch (error) {
    next(error)
   }
}
  
export const AddSubAdmin = async (req, res, next) => {
  try {
    const currentUser = req.user; 

    const {
      fullName,
      dob,
      gender,
      phone,
      email,
      post,
      idNumber,
      departmentIdNumber,
      password,
    } = req.body;

    if (!currentUser) {
      const error = new Error("Unauthorized — Please login again");
      error.statusCode = 401;
      return next(error);
    }

    console.log(req.body);
    
    
    if (
      !fullName ||
      !dob ||
      !gender ||
      !phone ||
      !email ||
      !post ||
      !idNumber ||
      !departmentIdNumber ||
      !password
    ) {
      const error = new Error("All  fields is required");
      error.statusCode = 400;
      return next(error);
    }

    // Check if email already exists
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already exists");
      error.statusCode = 400;
      return next(error);
    }

    // Handle ID Photo upload to Cloudinary
    const photo = req.file;
    let picture;
    if (photo) {
      const b64 = Buffer.from(photo.buffer).toString("base64");
      const dataURI = `data:${photo.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "subAdmins",
        width: 500,
        height: 500,
        crop: "fill",
      });
      picture = result.secure_url;
    }

    console.log(picture);
    

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new sub-admin
    const newSubAdmin = await Admin.create({
      fullName,
      dob,
      gender,
      phone,
      email,
      post,
      idNumbers: Array.isArray(idNumber) ? idNumber : [idNumber],
      departmentIdNumber,
      uniqueId: Date.now().toString(),
      idPhotos: picture ? [picture] : [],
      password: hashedPassword,
      role: "subAdmin",
      subAdmin: [],
    });

    res
      .status(201)
      .json({ message: "Sub-admin created successfully", data: newSubAdmin });
  } catch (error) {
    next(error);
  }
};


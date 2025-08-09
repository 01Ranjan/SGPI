import Admin from "../model/Admins.model.js";
import sendEmail from "../utils/sendemail.js"

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

    res.status(200).json({ message: "login  sucessful" });
   } catch (error) {
    next(error)
   }
}

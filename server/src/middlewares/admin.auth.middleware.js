import jwt from "jsonwebtoken"
import Admin from "../model/Admins.model.js";
export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token || "";
    console.log(token);
    
    if(!token){
        const error= new Error();
        error.statusCode=401;
        return next (error)
    }
    const decode =  jwt.verify(token,process.env.JWT_SECRET)
    

    const verifiedadmin= await Admin.findById(decode.ID);
    
    if(!verifiedadmin){
         const error = new Error("Unauthorized !! Login Again");
      error.statusCode = 401;
      return next(error);
    }
     req.user = verifiedadmin;
    next();


  } catch (error) {
    next(error);
  }
};

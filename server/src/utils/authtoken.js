// import jwt from "jsonwebtoken";

// const generatetoken= async(userid,role,res)=>{
//     const token = await jwt.sign({ID:userid ,role:role},process.env.JWT_SECRET,{
//         expiresIn:"1/3d"
//     })
//     res.cookie("error",token,{
//     maxAge:1000*60*60*8,
//     httpOnly:true,
//     secure:false,
//     sameSite:"lax"
//     })

//     return token
// }

// export default generatetoken


import jwt from "jsonwebtoken";

const generateToken = async (userId, role, res) => {
    const token = jwt.sign(
        { ID: userId, role: role },
        process.env.JWT_SECRET,
        { expiresIn: "8h" } // 8 hours
    );

    res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 8, // 8 hours
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });

    return token;
};

export default generateToken;

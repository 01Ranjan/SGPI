 import dotenv from "dotenv"
 dotenv.config()
 import express from "express"
 import cors from "cors"
 import connectDB from "./src/config/dbConnection.js"
 import AdminRouter from "./src/routers/Admin.router.js"
const app = express()

 

//json body parsing in express
app.use(express.json())


// cros 
 app.use(cors({origin: "http://localhost:5173", credentials: true }))


//this is test rout
app.get('/', (req, res) => {
  res.send('Hello World!')
})


//routing for different router

app.use("/admin",AdminRouter);








const port= process.env.PORT || 5000
app.listen(port, async () => {
  try {
    console.log(`server started  on port ${port}`);
    await connectDB();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

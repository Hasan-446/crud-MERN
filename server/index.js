import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";


import Connection from "./database/db.js";
import router from "./routes/Route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use("/", router);
 
dotenv.config();
const userName = process.env.DB_USERNAME;
const Password = process.env.DB_PASSWORD;

const PORT = 8000;
Connection(userName, Password);
app.listen(PORT, () => console.log(`server is running success ${PORT}`));

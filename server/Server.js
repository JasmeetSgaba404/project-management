import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {clerkMiddleware} from "@clerk/express";
import { serve } from "inngest/express";
import { functions, inngest } from "./inngest/index.js";



const app = express();

app.use(cors()); //resource sharing with the frontend
app.use(express.json()); //receive the incoming data in json format
app.use(clerkMiddleware()); //use clerk middleware for easier user authentication

app.get("/" , (req, res)=> res.send("Server is LIVE!"));
app.use("/api/inngest", serve({ client: inngest, functions })); //inngest client setup code for machine to machine conversation



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is live on ${PORT}`));




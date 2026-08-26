import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

//cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) //CORS is used to allow the requests from the frontend to the backend, it is a security feature

// Some middlewares 

//limit the size of the request body
app.use(express.json({
    limit: "16kb"
}));// Problem it solves: When frontend sends POST data as JSON, Express can't read it without parsing it first.
//What it does: Converts the raw JSON request body into req.body

//extended: true --> it allow the nested objects and complex objects to be encoded into the url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));// It parse the URL encoded data.
//Problem it solves: When frontend sends data in URL format (e.g., form submission, query parameters).
//What it does: Converts the URL-encoded data into a JavaScript object so your backend can read it.
//Why extended: true? It allows nested objects and arrays in the URL.
// due to this we can use req.params.id = 1 in URL (without this we can't use it) (https://google.com/users?id=1).

//serving static files
app.use(express.static("public"));
//Problem it solves: When frontend sends a request to the server with a file (like an image, PDF, or form data), Express can't read it without parsing it first.
//What it does: Makes the contents of the "public" folder accessible at the root URL.So if you have a file named image.jpg in the "public" folder, you can access it at http://localhost:3000/image.jpg. 

//cookie parser - it allows the server to access the cookies sent by the client
app.use(cookieParser());
//Problem it solves: When frontend sends cookies in the request (for authentication, session management, etc.), Express can't read them without parsing them first.
//What it does: Parses the incoming cookies and attaches them to the request object as req.cookies.So if the frontend sends a cookie named "token", you can access it at req.cookies.token.

//import routes here
import userRouter from "./routes/user.routes.js";
//api routes (it allows us to structure our api routes in different files)
app.use("/api/v1/users", userRouter);
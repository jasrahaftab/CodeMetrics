import "dotenv/config";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import { app } from "./app.js";
import connectDB from "./db/index.js";

(async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
})();

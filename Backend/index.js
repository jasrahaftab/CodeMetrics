import "dotenv/config";

import { app } from "./app.js";
import connectDB from "./src/database/index.js";

(async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.error("❌  Express app error:", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
        // what does this listen do? 
        //ans: it starts the server and listens for incoming requests on the specified port.
    } catch (error) { 
        console.log("Error: ", error);
        throw error;
    }
})();

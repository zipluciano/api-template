import dotenv from "dotenv";
import app from "./api";

dotenv.config();

const SERVER_PORT = process.env.NODE_PORT || 3030;

app.listen(SERVER_PORT, () => console.log("Server running on port:", SERVER_PORT));

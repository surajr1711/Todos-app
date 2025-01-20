import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todosRoutes from "./routes/todosRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/todos", todosRoutes);

// app.get("/", (req, res) => {
// 	res.send("Hello, from Express!");
// });

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error(err));

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

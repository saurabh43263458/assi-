require("dotenv").config();
const express = require("express");
const cors = require("cors");

const cookiesparser =require("cookie-parser")
const connectDb = require("./db");
const router = require("./route/auth.route");
const taskRoute = require("./route/task.route")
const app = express();

connectDb();


app.use(express.json());
app.use(cookiesparser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/auth", router);
app.use("/task",taskRoute);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
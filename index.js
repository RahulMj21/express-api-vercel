require("dotenv").config();
const express = require("express");
const router = require("./routes/hello.route");

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api/v1", router);

app.listen(PORT, () => console.log(`server is running on PORT : ${PORT}`));

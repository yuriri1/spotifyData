const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3001, () => console.log("Server running on port 3001"));

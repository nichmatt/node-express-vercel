// Import packages
const express = require("express");
const PORT = 3001;
const app = express();
const cors = require("cors");
const home = require("./routes");
const { errorHandler } = require("./middlewares");
const { Pool } = require("pg");

// connection to db

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", home);
app.use(errorHandler);

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

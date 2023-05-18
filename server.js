const mongoose = require("mongoose");
const app = require("./app");

// const { DB_HOST } = process.env;
const DB_HOST = 
  "mongodb+srv://oleksa:jpd8gYrSerI48AMa@cluster0.oczcsol.mongodb.net/";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

const express = require("express");
const { router } = require("./router/index");
const app = express();

app.use("/", router);

// app.use("/", (req, res, next) => {
//   console.log("Hello from middleware");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("Hello from middleware again");
//   res.json({ test: "json" });
// });

module.exports = {
  app,
};

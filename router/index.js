const express = require("express");

const router = express.Router();

router.get("/posts", (req, res, next) => {
  res.json({ posts: [{ test: "1", testf: "2" }] });
});
// router.post();
// router.delete();
module.exports = { router };

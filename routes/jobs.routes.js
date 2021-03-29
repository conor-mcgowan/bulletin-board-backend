const express = require("express");
const isAuth = require("../middleware/isAuth");
const router = express.Router();
const jobs = require("../models/jobs.model");

router.post("/add", isAuth, (req, res) => {
  return jobs.add(res, req.body, req.user.id);
});

router.get("/all", isAuth, (req, res) => {
  return jobs.all(res);
});

router.get("/user", isAuth, (req, res) => {
  return jobs.byUserID(res, req.user.id);
});

router.delete("/delete/:id", isAuth, (req, res) => {
  return jobs.remove(res, req.params.id, req.user.id);
});

router.patch("/update", isAuth, (req, res) => {
  return jobs.edit(res, req.body, req.user.id);
});

module.exports = router;

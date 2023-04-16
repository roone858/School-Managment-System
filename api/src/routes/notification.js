const express = require("express");

const router = express.Router();

const { Notification } = require("../models/notification.model");

router.get("/", async (req, res) => {
  const notifications = await Notification.getAll();
  res.json(notifications);
});

router.post("/", async (req, res) => {
  const notification = await Notification.create(req.body);
  res.json(notification);
});

module.exports = router;

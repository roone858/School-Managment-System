const express = require("express");
const {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
  deleteSessionByClassId,
} = require("../controllers/session.controller");
const router = express.Router();

router.get("/", getAllSessions);
router.post("/", getSessionById);
router.get("/:id", createSession);
router.put("/:id", updateSession);
router.delete("/:id", deleteSession);
router.delete("/delete/:id", deleteSessionByClassId);

module.exports = router;

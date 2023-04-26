const express = require("express");
const {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
  deleteSessionByClassId,
  deleteSessionBySubjectId,
} = require("../controllers/session.controller");
const router = express.Router();

router.get("/", getAllSessions);
router.post("/", createSession);
router.get("/:id", getSessionById);
router.put("/:id", updateSession);
router.delete("/:id", deleteSession);
router.delete("/delete/:id", deleteSessionByClassId);
router.delete("/deleteBySession/:id", deleteSessionBySubjectId);

module.exports = router;

const Session = require("../models/session.model");

async function createSession(req, res) {
  try {
    const result = await new Session().create(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllSessions(req, res) {
  try {
    const results = await Session.getAll();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getSessionById(req, res) {
  try {
    const result = await Session.getById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Session not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateSession(req, res) {
  try {
    const result = await new Session().update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Session not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteSession(req, res) {
  try {
    const result = await Session.delete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
async function deleteSessionByClassId(req, res) {
  try {
    const result = await Session.deleteByClass(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  createSession,
  getAllSessions,
  getSessionById,
  updateSession,
  deleteSession,
  deleteSessionByClassId,
};

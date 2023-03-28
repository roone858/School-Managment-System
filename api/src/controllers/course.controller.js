const Course = require("../models/course.model");


async function createCourse(req, res) {
  try {
    const course = await new Course().create(req.body);
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllCourses(req, res) {
  try {
    const courses = await Course.getAll();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getCourseById(req, res) {
  try {
    const course = await Course.getById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateCourse(req, res) {
  try {
    const result = await new Course().update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteCourse(req, res) {
  try {
    const result = await Course.delete(req.params.id);
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
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};

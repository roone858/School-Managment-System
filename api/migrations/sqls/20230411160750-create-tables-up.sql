/* Replace with your SQL commands */
-- Create the Parent table
CREATE TABLE  IF NOT EXISTS Parent (
  ID SERIAL PRIMARY KEY,
  FirstName VARCHAR(255) NOT NULL,
  LastName VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  PhoneNumber VARCHAR(20) NOT NULL
);

CREATE TABLE  IF NOT EXISTS Student (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  email VARCHAR(250) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  dateOfBirth Date,
  address VARCHAR(250),
  parentId INTEGER REFERENCES parent(id)
);


-- Create the teacher table
CREATE TABLE IF NOT EXISTS teacher (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  dateOfBirth Date,
  address VARCHAR(250)
);

-- Create the courses table
CREATE TABLE IF NOT EXISTS course (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  teacherId INTEGER REFERENCES teacher(id)
);

-- Create the attendance table
CREATE TABLE IF NOT EXISTS attendance (
  id SERIAL PRIMARY KEY,
  studentId INTEGER REFERENCES student(id),
  courseId INTEGER REFERENCES course(id),
  attendDate TIMESTAMPTZ DEFAULT Now()
);


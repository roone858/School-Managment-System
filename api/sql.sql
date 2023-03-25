
-- Create the Parent table

CREATE TABLE Parent (
  ID SERIAL PRIMARY KEY,
  FirstName VARCHAR(255) NOT NULL,
  LastName VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  PhoneNumber VARCHAR(20) NOT NULL
);

-- Create the STUDENT table

CREATE TABLE Student (
  ID SERIAL PRIMARY KEY ,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  email VARCHAR(250) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  phone  VARCHAR(50) NOT NULL,
  dateOfBirth Date ,
  address VARCHAR(250),
  parentId INTEGER REFERENCES parent(id)
);

-- Create the teacher table

CREATE TABLE teacher (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  phone  VARCHAR(50) NOT NULL,
  dateOfBirth Date ,
  address VARCHAR(250)
);

-- Create the courses table

CREATE TABLE course (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  teacherId INTEGER REFERENCES teacher(id)
);

-- Create the enrollment table

CREATE TABLE enrollment (
  id SERIAL PRIMARY KEY,
  studentId INTEGER REFERENCES student(id),
  courseId INTEGER REFERENCES course(id),
  enrollmentDate DATE
);

-- Create the attendance table
CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  studentId INTEGER REFERENCES students(id),
  courseId INTEGER REFERENCES courses(id),
  attendanceDate DATE,
  isPresent BOOLEAN NOT NULL
);

-- Create the grades table
CREATE TABLE grades (
  id SERIAL PRIMARY KEY,
  studentId INTEGER REFERENCES students(id),
  courseId INTEGER REFERENCES courses(id),
  grade DECIMAL(4,2),
  gradeDate DATE
);




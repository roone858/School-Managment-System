/* Replace with your SQL commands */
-- Create the gender_type table
CREATE TYPE gender_type as ENUM('Male', 'Female');

-- Create the student table
CREATE TABLE IF NOT EXISTS student (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  gender gender_type NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  address VARCHAR(255)
);

-- Create the teacher table
CREATE TABLE IF NOT EXISTS teacher (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  gender gender_type NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  address VARCHAR(255)
);

-- Create the course table
CREATE TABLE IF NOT EXISTS course (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  department VARCHAR(255) NOT NULL
);

CREATE TYPE statues_type as ENUM('Enrolled', 'Dropped');

-- Create the enrollment table
CREATE TABLE IF NOT EXISTS enrollment (
  id SERIAL PRIMARY KEY,
  status statues_type NOT NULL,
  grade VARCHAR(5),
  student_Id INTEGER NOT NULL REFERENCES student(id),
  course_Id INTEGER NOT NULL REFERENCES course(id)
);

-- Create the teaching table
CREATE TABLE IF NOT EXISTS teaching (
  id SERIAL PRIMARY KEY,
  semester VARCHAR(255) NOT NULL,
  section VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  teacher_id INTEGER REFERENCES teacher(id),
  course_id INTEGER REFERENCES course(id)
);

-- Create the timetable table
CREATE TABLE IF NOT EXISTS timetable (
  id SERIAL PRIMARY KEY,
  period VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  academic_year VARCHAR(255) NOT NULL
);

-- Create the class_session table
CREATE TABLE IF NOT EXISTS class_session (
  id SERIAL PRIMARY KEY,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  classroom VARCHAR(255) NOT NULL,
  course_id INTEGER REFERENCES course(id),
  timetable_id INTEGER REFERENCES timetable(id)
);

-- Create the Parent table
CREATE TABLE IF NOT EXISTS grade (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  min_score FLOAT NOT NULL,
  max_score FLOAT NOT NULL
);

-- Create the grading_scale table
CREATE TABLE IF NOT EXISTS grading_scale (
  id SERIAL PRIMARY KEY,
  grade_id INT NOT NULL,
  letter_grade VARCHAR(5) NOT NULL,
  lower_bound FLOAT NOT NULL,
  upper_bound FLOAT NOT NULL,
  FOREIGN KEY (grade_id) REFERENCES grade(id)
);

-- Create the attendance table
CREATE TYPE statues_type as ENUM('Enrolled', 'Dropped');

CREATE TABLE IF NOT EXISTS attendance (
  id SERIAL PRIMARY KEY,
  status statues_type NOT NULL,
  class_session_id INTEGER REFERENCES class_session(id),
  student_id INTEGER REFERENCES student(id)
);
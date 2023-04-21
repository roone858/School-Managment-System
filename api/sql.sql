-- Create the Parent table
CREATE TABLE Parent (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  PhoneNumber VARCHAR(20) NOT NULL
);

-- Create the STUDENT table
CREATE TABLE Student (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(250) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  dob Date,
  address VARCHAR(250),
  parentId INTEGER REFERENCES parent(id)
);

-- Create the teacher table
CREATE TABLE teacher (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  dob Date,
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
  grade DECIMAL(4, 2),
  gradeDate DATE
);

-- Create the attendance  table
CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  studentId INTEGER REFERENCES student(id),
  courseId INTEGER REFERENCES course(id),
  attendDate TIMESTAMPTZ DEFAULT Now()
);

CREATE TABLE CourseAssignment (
  course_id INT NOT NULL,
  teacher_id INT NOT NULL,
  PRIMARY KEY (course_id, teacher_id),
  FOREIGN KEY (course_id) REFERENCES Course(course_id),
  FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
);

CREATE TABLE Grade (
  id SERIAL PRIMARY KEY,
  course_work DECIMAL(4, 2),
  final_exam DECIMAL(4, 2),
  overall_grade DECIMAL(4, 2),
  student_id INTEGER REFERENCES Student(id),
  course_id INTEGER REFERENCES Course(id)
);

CREATE TABLE IF NOT EXISTS admin (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  username VARCHAR(250) UNIQUE NOT NULL,
  email VARCHAR(250) UNIQUE NOT NULL,
  password VARCHAR(250) NOT NULL
);

CREATE TABLE IF NOT EXISTS notifications (
  id SERIAL PRIMARY KEY,
  message TEXT,
  generated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO
  notifications (message)
VALUES
  ('your massage here Tow');

INSERT INTO
  student (
    first_name,
    last_name,
    email,
    gender,
    phone,
    dob,
    address
  )
VALUES
  (
    'Mahmoud',
    'Gamal',
    'roone858@gmail.com',
    'Male',
    '01140192414',
    '1-1-1999',
    'Assiut-Egypt'
  ),
  (
    'Emad',
    'Rady',
    'Emad22@gmail.com',
    'Male',
    '01000192414',
    '1-1-2000',
    'Cairo-Egypt'
  ),
  (
    'Ahmed',
    'Adel',
    'ahmed@gmail.com',
    'Male',
    '01140192414',
    '1-1-1989',
    'Aswan-Egypt'
  ),
  (
    'Mariam',
    'Gamal',
    'Mariam@gmail.com',
    'Female',
    '0155192414',
    '1-1-1990',
    'Assiut-Egypt'
  ),
  (
    'Karyma',
    'Ali',
    'Kali@gmail.com',
    'Female',
    '012222224',
    '1-1-1995',
    'Assiut-Egypt'
  );

INSERT INTO
  teacher (
    first_name,
    last_name,
    email,
    gender,
    phone,
    dob,
    address
  )
VALUES
  (
    'Maged',
    'Askar',
    'magedaskar@gmail.com',
    'Male',
    '01040192414',
    '1-1-1989',
    'Assiut-Egypt'
  ),
  (
    'Mohamed',
    'Youssef',
    'Myoussef@gmail.com',
    'Male',
    '01500100014',
    '1-1-1985',
    'Cairo-Egypt'
  ),
  (
    'Ahmed',
    'Talat',
    'ahmed@gmail.com',
    'Male',
    '01140192414',
    '1-1-1989',
    'Aswan-Egypt'
  ),
  (
    'Rehab',
    'Gamal',
    'rehab@gmail.com',
    'Female',
    '0155192414',
    '1-1-1990',
    'Assiut-Egypt'
  ),
  (
    'Mona',
    'Ali',
    'mona@gmail.com',
    'Female',
    '01645222224',
    '1-1-1995',
    'Assiut-Egypt'
  );

INSERT INTO
  course(title, description, department)
VALUES
  (
    'Front-End Developer',
    'Launch your career as a front-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started.',
    'test'
  ),
  (
    'Data Analytics Professional',
    'This is your path to a career in data analytics. In this program, you will learn in-demand skills that will have you job-ready in less than 6 months. No degree or experience required.',
    'test'
  ),
  (
    'Machine Learning',
    '#BreakIntoAI with Machine Learning Specialization. Master fundamental AI concepts and develop practical machine learning skills in the beginner-friendly, 3-course program by AI visionary Andrew Ng',
    'test'
  ),
  (
    'DevOps, Cloud, and Agile',
    'DevOps essential characteristics including culture, behavior, practices, tools, methodologies, technologies and metrics.',
    'test'
  ),
  (
    'Back-End Developer',
    ' Developer by learning skills from Watnya-TECH, then get a completion certificate to validate your skills.',
    'test'
  );

INSERT INTO
  admin (
    first_name,
    last_name,
    username,
    email,
    password
  )
Values
  (
    'Mahmoud',
    'Gamal',
    'admin',
    'mahmoudg.dev@gmail.com',
    'admin'
  );

CREATE TYPE gender_type as ENUM('Male', 'Female');

CREATE TABLE student (
 id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  gender gender_type NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  address VARCHAR(255)
);

CREATE TABLE teacher (
 id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  gender gender_type NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  address VARCHAR(255)
);

CREATE TABLE course (
 id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  credits INT NOT NULL,
  department VARCHAR(255) NOT NULL
);

CREATE TYPE statues_type as ENUM('Enrolled', 'Dropped');

CREATE TABLE enrollment (
  id SERIAL PRIMARY KEY,
  status statues_type NOT NULL,
  grade VARCHAR(5),
  student_Id INTEGER NOT NULL REFERENCES student(id),
  course_Id INTEGER NOT NULL REFERENCES course(id)
);

CREATE TABLE teaching (
 id SERIAL PRIMARY KEY,
  semester VARCHAR(255) NOT NULL,
  section VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  teacher_id INTEGER REFERENCES teacher(id),
  course_id INTEGER REFERENCES course(id)
);

CREATE TABLE timetable (
  id SERIAL PRIMARY KEY,
  period VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  academic_year VARCHAR(255) NOT NULL
);

CREATE TABLE class_session (
 id SERIAL PRIMARY KEY,
  start_time DATETIME NOT NULL,
  end_time DATETIME NOT NULL,
  classroom VARCHAR(255) NOT NULL,
  course_id INTEGER REFERENCES course(id),
  timetable_id INTEGER REFERENCES timetable(id)
);

CREATE TABLE grade (
 id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  min_score FLOAT NOT NULL,
  max_score FLOAT NOT NULL
);

CREATE TABLE grading_scale (
 id SERIAL PRIMARY KEY,
  grade_id INT NOT NULL,
  letter_grade VARCHAR(5) NOT NULL,
  lower_bound FLOAT NOT NULL,
  upper_bound FLOAT NOT NULL,
  FOREIGN KEY (grade_id) REFERENCES grade(id)
);

CREATE TABLE attendance (
 id SERIAL PRIMARY KEY,
  class_session_id INT NOT NULL,
  student_id INT NOT NULL,
  status ENUM('Present', 'Absent') NOT NULL,
  class_session_id INTEGER REFERENCES class_session(id),
  student_id INTEGER REFERENCES student(id)
);

require('crypto').randomBytes(64).toString('hex')
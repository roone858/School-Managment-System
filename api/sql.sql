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
CREATE TABLE teacher (
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
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  username VARCHAR(250) UNIQUE NOT NULL,
  email VARCHAR(250) UNIQUE NOT NULL,
  password VARCHAR(250) NOT NULL
);

CREATE TABLE IF NOT EXISTS notifications (
  id SERIAL PRIMARY KEY,
  message TEXT,
  generated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO  notifications (message )
VALUES ('your massage here');

INSERT INTO
  student (
    firstName,
    lastName,
    email,
    gender,
    phone,
    dateOfBirth,
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
    firstName,
    lastName,
    email,
    gender,
    phone,
    dateOfBirth,
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
  course(title, description, teacherId)
VALUES
  (
    'Front-End Developer',
    'Launch your career as a front-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started.',
    1
  ),
  (
    'Data Analytics Professional',
    'This is your path to a career in data analytics. In this program, you will learn in-demand skills that will have you job-ready in less than 6 months. No degree or experience required.',
    2
  ),
  (
    'Machine Learning',
    '#BreakIntoAI with Machine Learning Specialization. Master fundamental AI concepts and develop practical machine learning skills in the beginner-friendly, 3-course program by AI visionary Andrew Ng',
    3
  ),
  (
    'DevOps, Cloud, and Agile',
    'DevOps essential characteristics including culture, behavior, practices, tools, methodologies, technologies and metrics.',
    4
  ),
  (
    'Back-End Developer',
    ' Developer by learning skills from Watnya-TECH, then get a completion certificate to validate your skills.',
    5
  );

INSERT INTO
  admin (
    firstname,
    lastname,
    username,
    email,
    password
  )
Values
  ('Mahmoud','Gamal','admin', 'mahmoudg.dev@gmail.com', 'admin');

require('crypto').randomBytes(64).toString('hex')
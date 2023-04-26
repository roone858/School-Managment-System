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

-- Create the subjects table
CREATE TABLE subject (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  teacherId INTEGER REFERENCES teacher(id)
);

-- Create the enrollment table
CREATE TABLE enrollment (
  id SERIAL PRIMARY KEY,
  studentId INTEGER REFERENCES student(id),
  subjectId INTEGER REFERENCES subject(id),
  enrollmentDate DATE
);

-- Create the attendance table
CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  studentId INTEGER REFERENCES students(id),
  subjectId INTEGER REFERENCES subjects(id),
  attendanceDate DATE,
  isPresent BOOLEAN NOT NULL
);

-- Create the grades table
CREATE TABLE grades (
  id SERIAL PRIMARY KEY,
  studentId INTEGER REFERENCES students(id),
  subjectId INTEGER REFERENCES subjects(id),
  grade DECIMAL(4, 2),
  gradeDate DATE
);

-- Create the attendance  table
CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  studentId INTEGER REFERENCES student(id),
  subjectId INTEGER REFERENCES subject(id),
  attendDate TIMESTAMPTZ DEFAULT Now()
);

CREATE TABLE SubjectAssignment (
  subject_id INT NOT NULL,
  teacher_id INT NOT NULL,
  PRIMARY KEY (subject_id, teacher_id),
  FOREIGN KEY (subject_id) REFERENCES Subject(subject_id),
  FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
);

CREATE TABLE Grade (
  id SERIAL PRIMARY KEY,
  subject_work DECIMAL(4, 2),
  final_exam DECIMAL(4, 2),
  overall_grade DECIMAL(4, 2),
  student_id INTEGER REFERENCES Student(id),
  subject_id INTEGER REFERENCES Subject(id)
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

/ / / / / / / / / / / / / / / / / / / / / / / CREATE TYPE gender_type as ENUM('Male', 'Female');

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

CREATE TABLE subject (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
);

CREATE TYPE statues_type as ENUM('Enrolled', 'Dropped');

CREATE TABLE enrollment (
  id SERIAL PRIMARY KEY,
  status statues_type NOT NULL,
  grade VARCHAR(5),
  student_Id INTEGER NOT NULL REFERENCES student(id),
  subject_Id INTEGER NOT NULL REFERENCES subject(id)
);

CREATE TABLE teaching (
  id SERIAL PRIMARY KEY,
  semester VARCHAR(255) NOT NULL,
  section VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  teacher_id INTEGER REFERENCES teacher(id),
  subject_id INTEGER REFERENCES subject(id)
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
  subject_id INTEGER REFERENCES subject(id),
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
INSERT INTO
  timetable (period, start_date, end_date, academic_year)
VALUES
  ('2', '2023-4-1', '2023-9-29', '5 grade');

INSERT INTO
  class_session (
    start_time,
    end_time,
    classroom,
    subject_id,
    timetable_id
  )
VALUES
  (
    '2023-4-23 09:00:00',
    '2023-4-23 10:00:00',
    'A-1',
    1,
    1
  );

CREATE TABLE class (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  grade_level INT NOT NULL
);

CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  gender CHAR(1) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  address VARCHAR(255),
  class_id INT,
  FOREIGN KEY (class_id) REFERENCES class (id)  ON DELETE SET NULL
);

CREATE TABLE teacher (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  gender CHAR(1) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  address VARCHAR(255)
);

CREATE TABLE subject (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE enrollment (
  id SERIAL PRIMARY KEY,
  student_id INT NOT NULL,
  subject_id INT NOT NULL,
  status VARCHAR(8) NOT NULL,
  grade VARCHAR(5),
  FOREIGN KEY (student_id) REFERENCES student(id),
  FOREIGN KEY (subject_id) REFERENCES subject(id)
);

CREATE TABLE teaching (
  id SERIAL PRIMARY KEY,
  teacher_id INT NOT NULL,
  subject_id INT NOT NULL,
  semester VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  grade_level INT NOT NULL,
  FOREIGN KEY (teacher_id) REFERENCES teacher(id),
  FOREIGN KEY (subject_id) REFERENCES subject(id)
);

CREATE TABLE timetable (
  id SERIAL PRIMARY KEY,
  period VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  class_id INT,
  FOREIGN KEY (class_id) REFERENCES class(id)
);

CREATE TABLE class_session (
  id SERIAL PRIMARY KEY,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  subject_id INT NOT NULL ,
  class_id INT  NOT NULL,
  day VARCHAR(255) NOT NULL,
  FOREIGN KEY (subject_id) REFERENCES subject(id),
  FOREIGN KEY (class_id) REFERENCES class(id)
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
  status VARCHAR(7) NOT NULL,
  FOREIGN KEY (class_session_id) REFERENCES class_session(id) ,
  FOREIGN KEY (student_id) REFERENCES student(id)
);

drop table attendance,
class_session,
enrollment,
subject;


ALTER TABLE class_session
DROP CONSTRAINT class_session_class_id_fkey ;



ALTER TABLE class_session
ADD CONSTRAINT class_session_class_id_fkey
FOREIGN KEY (class_id)
REFERENCES class(id)
ON DELETE SET NULL;

ALTER TABLE class_session
ALTER COLUMN class_id DROP NOT NULL;
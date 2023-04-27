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


CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  class_session_id INT ,
  student_id INT NOT NULL,
  subject_id INT ,
  date DATE NOT NULL,
  status VARCHAR(7) NOT NULL,
  FOREIGN KEY (subject_id) REFERENCES subject(id) ON DELETE SET NULL ,
  FOREIGN KEY (class_session_id) REFERENCES class_session(id) ON DELETE SET NULL,
  FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE SET NULL
);
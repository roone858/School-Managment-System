INSERT INTO
     class (name, grade_level)
VALUES
     ('1 A', 1),
     ('1 B', 1),
     ('1 C', 1),
     ('1 D', 1),
     ('1 F', 1);

INSERT INTO
     notifications (message)
VALUES
     ('your massage here Tow');

INSERT INTO
     student (
          name,
          email,
          gender,
          phone,
          dob,
          address,
          class_id
     )
VALUES
     (
          'Mahmoud Gamal',
          'roone858@gmail.com',
          'M',
          '01140192414',
          '1-1-1999',
          'Assiut-Egypt',
          1
     ),
     (
          'Emad Rady',
          'Emad22@gmail.com',
          'M',
          '01000192414',
          '1-1-2000',
          'Cairo-Egypt',
          2
     ),
     (
          'Ahmed Adel',
          'ahmed@gmail.com',
          'M',
          '01140192414',
          '1-1-1989',
          'Aswan-Egypt',
          3
     ),
     (
          'Mariam Gamal',
          'Mariam@gmail.com',
          'F',
          '0155192414',
          '1-1-1990',
          'Assiut-Egypt',
          4
     ),
     (
          'Karyma ALi',
          'Kali@gmail.com',
          'F',
          '012222224',
          '1-1-1995',
          'Assiut-Egypt',
          5
     );

INSERT INTO
     teacher (
          name,
          email,
          gender,
          phone,
          dob,
          address
     )
VALUES
     (
          'Maged Askar',
          'magedaskar@gmail.com',
          'M',
          '01040192414',
          '1-1-1989',
          'Assiut-Egypt'
     ),
     (
          'Mohamed Youssef',
          'Myoussef@gmail.com',
          'M',
          '01500100014',
          '1-1-1985',
          'Cairo-Egypt'
     ),
     (
          'Ahmed Talat',
          'ahmed@gmail.com',
          'M',
          '01140192414',
          '1-1-1989',
          'Aswan-Egypt'
     ),
     (
          'Rehab Gamal',
          'rehab@gmail.com',
          'F',
          '0155192414',
          '1-1-1990',
          'Assiut-Egypt'
     ),
     (
          'Mona Ali',
          'mona@gmail.com',
          'F',
          '01645222224',
          '1-1-1995',
          'Assiut-Egypt'
     );

INSERT INTO
     subject(title, description)
VALUES
     (
          'Maths',
          'Launch your career as a Statistics Eng. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started.'
     ),
     (
          'English',
          'This is your path to a career in data analytics. In this program, you will learn in-demand skills that will have you job-ready in less than 6 months. No degree or experience required.'
     ),
     (
          'Science',
          '#BreakIntoAI with Machine Learning Specialization. Master fundamental AI concepts and develop practical machine learning skills in the beginner-friendly, 3-subject program by AI visionary Andrew Ng'
     ),
     (
          'History',
          'DevOps essential characteristics including culture, behavior, practices, tools, methodologies, technologies and metrics.'
     ),
     (
          'Art',
          ' Developer by learning skills from Watnya-TECH, then get a completion certificate to validate your skills.'
     );

INSERt INTO
     teaching(
          semester,
          start_date,
          end_date,
          teacher_id,
          subject_id,
          grade_level
     )
VALUES
     (
          'Semester 1',
          '2023-09-27',
          '2024-01-27',
          1,
          1,
          2
     ),
     (
          'Semester 1',
          '2023-09-27',
          '2024-01-27',
          2,
          2,
          3
     ),
     (
          'Semester 1',
          '2023-09-27',
          '2024-01-27',
          3,
          3,
          4
     ),
     (
          'Semester 1',
          '2023-09-27',
          '2024-01-27',
          4,
          4,
          5
     ),
     (
          'Semester 1',
          '2023-09-27',
          '2024-01-27',
          5,
          5,
          6
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
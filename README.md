# School Management System
Welcome to the School Management System!

This system is designed to help schools manage their daily operations, including managing students, teachers, classes, and administrative tasks. This system is ideal for schools of all sizes, from small independent schools to large public school districts.



# Prerequisites

Before you start using this system, you will need to have the following installed on your system:

1. Node.js: You can download Node.js from the official website at https://nodejs.org. The version required for this stack is v14.0.0 or later.

2. PostgresSQL: You can download PostgresSQL from the official website at https://www.postgresql.org/download/. Make sure to install the appropriate version for your operating system.Prerequisites


# Installation

To install the system, follow these steps:

1. Clone the repository to your local machine by running git clone `https://github.com/roone858/School-Managment-System.git` in your terminal.

2. Navigate to the cloned repository and run `npm install` in Api and Frontend to install the required dependencies.

3. Create a new PostgreSQL database using the `create database school ; `  command in your terminal. Make sure to record the name of the database, username, and password.
4. Create all tables `cd ./Api` and run `npx db-migrate up`

5. Copy the host +`/api/.env` example  file to a new file named host +`/api/.env`
6. Open the `.env` file and replace the placeholders with your database credentials.



# Usage

To start the application, run the following commands in your terminal:

1. Run `cd api` then  `npm run dev` to start the development server.
2. Run `cd frontend` then  `npm run dev` to start the React App.

3. Open a web browser and navigate to `http://127.0.0.1:5173/` to view the application.

4. Use the data to log in username : `admin` and pass : `admin` and test the features of the application.

5. To stop the development server, press CTRL+C in your terminal.

# Features

Once the system is installed, you can access the system by navigating to the URL where you have uploaded the system files. The system will prompt you to log in with your username and password.

1. Once you have logged in, you will be taken to the dashboard where you can access all the different modules of the system. These modules include:

2. Students: This module allows you to manage student information, including adding new students, editing existing ones, and viewing student reports.

3. Teachers: This module allows you to manage teacher information, including adding new teachers, editing existing ones, and viewing teacher reports.

4. Classes: This module allows you to manage class information, including creating new classes, editing existing ones, and viewing class reports.

5. Attendance: This module allows you to manage student attendance, including taking attendance for individual students or entire classes.

6. Grades: This module allows you to manage student grades, including entering grades for individual assignments and calculating final grades.

7. Reports: This module allows you to generate various reports, including student reports, teacher reports, class reports, and attendance reports.

8.Admin: This module allows you to manage administrative tasks, including managing user accounts, system settings, and system backups.

# Support

If you encounter any issues or have any questions about the School Management System, please contact our support team at mahmoudg.dev@gmail.com. We are here to help you with any issues you may encounter while using the system.

Thank you for choosing the School Management System!
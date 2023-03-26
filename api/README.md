## overview
A School Management System API is a type of application programming interface (API) that is specifically designed for use with school management systems. Its purpose is to provide programmatic access to the features and data of the school management system, enabling developers to create custom applications that can interact with the system.

The target audience for a School Management System API includes developers who want to build applications that can integrate with the school management system. This could include software vendors who want to build a custom student information system, educational technology companies that want to integrate their software with the school management system, or individual developers who want to create custom applications for teachers, students, and parents.

The School Management System API typically provides a wide range of functionality, such as the ability to manage student records, attendance data, class schedules, and exam results. It may also include features for managing staff records, school finances, and other administrative tasks. By providing programmatic access to this functionality, the API enables developers to build custom applications that can automate and streamline various aspects of the school management system, improving efficiency and reducing workload for teachers and administrators.

Overall, a School Management System API provides a powerful tool for developers who want to create custom applications that can integrate with the school management system. It can help to improve communication, automate administrative tasks, and provide more efficient and effective ways to manage school data and operations

## authentication
To secure a School Management System API, an authentication mechanism is used to verify the identity of users and ensure that only authorized users can access the system's resources. There are several authentication mechanisms that can be used to secure an API, but one commonly used method is token-based authentication.

In token-based authentication, when a user logs into the system, the API generates a unique access token that is then sent to the user's device. This token is usually a long string of characters that serves as a digital key, allowing the user to access the API's resources without having to repeatedly enter their login credentials.

When the user makes a request to the API, the access token is sent along with the request as proof of the user's identity. The API then verifies the token to ensure that it is valid and that the user is authorized to access the requested resource. If the token is valid, the API returns the requested data, and the user can continue to use the token to access other resources within the system.

To further enhance security, token-based authentication often uses a combination of access tokens and refresh tokens. Access tokens have a short lifespan and expire after a set period of time, typically a few hours. When an access token expires, the user must obtain a new token by using a refresh token. Refresh tokens are long-lived tokens that are used to obtain new access tokens when the original access token expires.

Overall, token-based authentication is a widely used and effective method for securing APIs. It provides a scalable and flexible approach to authentication and helps to ensure that only authorized users can access the system's resources

## Endpoints

1. `/api/students`:
     - `GET`: get a list of all students
     - `POST`: create a new student
2. `/api/students/:id`:
     - `GET`: get a specific student by ID
     - `PUT`: update a specific student by ID
     - `DELETE`: delete a specific student by ID
3. `/api/teachers`:
     - `GET`: get a list of all teachers
     - `POST`: create a new teacher
4. `/api/teachers/:id`:
     - `GET`: get a specific teacher by ID
     - `PUT`: update a specific teacher by ID
     - `DELETE`: delete a specific teacher by ID
5. `/api/courses`:
     - `GET`: get a list of all courses
   - `POST`: create a new course
6.	`/api/courses/:id`:
     - `GET`: get a specific course by ID
     - `PUT`: update a specific course by ID
     - `DELETE`: delete a specific course by ID
7.	`/api/enrollments`:
     - `GET`: get a list of all enrollments
     - `POST`: create a new enrollment
8.	`/api/enrollments/:id`:
     - `GET`: get a specific enrollment by ID
     - `PUT`: update a specific enrollment by ID
     - `DELETE`: delete a specific enrollment by ID
9.	`/api/attendance`:
     - `GET`: get a list of all attendance records
     - `POST`: create a new attendance record
10.	`/api/attendance/:id`:
     - `GET`: get a specific attendance record by ID
     - `PUT`: update a specific attendance record by ID
     - `DELETE`: delete a specific attendance record by ID
11.	`/api/grades`:
     - `GET`: get a list of all grades
•	`POST`: create a new grade
12.	`/api/grades/:id`:
     - `GET`: get a specific grade by ID
     - `PUT`: update a specific grade by ID
     - `DELETE`: delete a specific grade by ID
  
**may also want to include authentication endpoints, such as:**
`POST /login`: Authenticate a user and generate an access token.
`POST /logout`: Invalidate an access token and log the user out



## Libraries and SDKs

The API is built with Node.js and Express, and uses a PostgreSQL database to store data. The following libraries and SDKs are used:
- `express`: A fast, unopinionated, minimalist web framework for Node.js.
- `pg`: A PostgreSQL client for Node.js.
- pg-pool: A connection pool for PostgreSQL clients.
- `nodemon`: A tool that helps develop Node.js-based applications by automatically restarting the node application when file changes in the directory are detected.
- `bcrypt`: A library for hashing passwords.
- `jsonwebtoken`: A library for creating and verifying JSON Web Tokens (JWTs).
- `body-parser`: A middleware for handling HTTP request bodies.
- `cors`: A middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications.
#### Installation 
To install the necessary libraries and SDKs, run the following command in the project directory:
```
npm install express pg pg-pool nodemon bcrypt jsonwebtoken body-parser cors 
```
This will install all the required dependencies and add them to the package.json file.
#### Usage
To use the libraries and SDKs in the API code, simply require them at the top of the file

## Response Formats
The API returns all data in JSON format. Responses will have a Content-Type header of application/json.
#### Examples
- GET /students
```
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": 1,
        "firstname": "Mahmoud",
        "lastname": "Gamal",
        "email": "roone@gmail.com",
        "gender": "Male",
        "phone": "0115043454",
        "dateofbirth": "1998-12-31T22:00:00.000Z",
        "address": "Assiut - Egypt",
        "parentid": null
    },
    {
        "id": 3,
        "firstname": "Hesham",
        "lastname": "Abbas",
        "email": "habbas@gmail.com",
        "gender": "male",
        "phone": "324234333",
        "dateofbirth": "1999-12-31T22:00:00.000Z",
        "address": "Assiut - Egypt",
        "parentid": 1
    }
]
```


- POST /students
```
HTTP/1.1 201 Created
Content-Type: application/json

  {
        "id": 3,
        "firstname": "Hesham",
        "lastname": "Abbas",
        "email": "habbas@gmail.com",
        "gender": "male",
        "phone": "324234333",
        "dateofbirth": "1999-12-31T22:00:00.000Z",
        "address": "Assiut - Egypt",
        "parentid": 1
    }

```

In the above examples, the responses are shown in JSON format with the appropriate HTTP status code and content type headers. The data returned in the response depends on the endpoint being called and the parameters passed in the request.

## Error Handling
If an error occurs while processing a request, the API will return an error response with an appropriate status code and error message. The following status codes may be returned:
- `400 Bad Request`: The request was invalid or could not be understood by the server.
- `401 Unauthorized`: The client is not authorized to access the requested resource.
- `403 Forbidden`: The client does not have permission to access the requested resource.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
#### Error Response Format
Error responses will be returned in the same format as regular responses, with an additional error field in the response body. The error field will contain an error message that describes the nature of the error.
Here's an example of an error response for a POST /students request that fails due to a missing name parameter:


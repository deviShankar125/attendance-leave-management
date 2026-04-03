# Attendance & Leave Management API

##  Introduction

This project is a simple backend system designed to manage employee
attendance and leave requests. It helps track when employees check
in/out and allows them to apply for leave, while admins can approve or
reject those requests.

------------------------------------------------------------------------

##  What This Project Can Do

-  Employees can check in and check out\
-  Employees can apply for leave\
-  Admin can approve or reject leave requests\
-  View employee attendance history\
-  View leave records

------------------------------------------------------------------------

##  Technologies

-   Node.js (Backend runtime)
-   Express.js (Server framework)
-   MySQL (Database)

------------------------------------------------------------------------

##  How to Run This Project

Follow these steps to run the project on your system:

###  Install Dependencies

``` bash
npm install
```

###  Setup Database

-   Open MySQL
-   Run the `database.sql` file to create required tables

###  Start the Server

``` bash
npm start
```

------------------------------------------------------------------------

##  API Endpoints

###  Attendance

-   `POST /check-in` → Mark employee check-in\
-   `POST /check-out` → Mark employee check-out

###  Leave Management

-   `POST /leave/apply` → Apply for leave\
-   `POST /leave/approve` → Approve or reject leave (Admin)

###  Records

-   `GET /attendance/:employee_id` → Get attendance records\
-   `GET /leaves/:employee_id` → Get leave records

------------------------------------------------------------------------

##  Database Setup

Make sure to execute the `database.sql` file in your MySQL server before
starting the application.

------------------------------------------------------------------------

##  Conclusion

This project is a basic backend system and can be extended further with
features like authentication and frontend integration.

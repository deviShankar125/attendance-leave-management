CREATE DATABASE attendance_db;
USE attendance_db;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    check_in DATETIME,
    check_out DATETIME,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE leaves (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    start_date DATE,
    end_date DATE,
    status VARCHAR(20) DEFAULT 'PENDING',
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

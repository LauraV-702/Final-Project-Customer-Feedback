CREATE DATABASE customer;

USE customer;

CREATE TABLE survey (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,   
    fname VARCHAR(255),               
    lname VARCHAR(255),               
    email VARCHAR(100),              
    experience VARCHAR(100),                 
    suggestions VARCHAR(100),                               
    timestamp DATETIME DEFAULT NOW()
);

INSERT INTO survey (fname, lname, email, experience, suggestions)
VALUES ('Joe', 'Smith', 'joe123@gmail.com', 'Good', 'Please add more features!');

SELECT * FROM survey;
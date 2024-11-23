CREATE DATABASE feedback;

USE feedback;

DROP TABLE IF EXISTS feedback;

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,       
    firstname VARCHAR(100) NOT NULL,               
    lastname VARCHAR(100) NOT NULL,               
    email VARCHAR(100) NOT NULL,              
    feedback TEXT NOT NULL,                 
    rating VARCHAR(50),                               
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO feedback (firstname, lastname, email, feedback, rating)
VALUES 
    ('John', 'Doe', 'john.doe@example.com', 'Great service, will come again!', 5);

SELECT * FROM feedback;

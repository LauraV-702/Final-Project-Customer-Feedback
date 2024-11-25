# Customer Survey Platform Project

### Authors: Diana Khachaturova, Laura Villaraza 
Pair-Programmed the whole project.

## Summary

The **Survey Platform** allows users to fill out a Customer Feedback form, which is then displayed on a `submission` page showing the data submitted. 

Additionally, the `Feedback Page` is available to display all feedback entries in a table format.

## Features

- **Customer Survey Form**:  
  The app allows users to fill out a Feedback survey with the following fields:
  - **First Name**, **Last Name**, and **Email** (all required).
  - **Experience** (radio buttons: Good, Bad, Average).
  - **Suggestions** (optional text area).

- **Submit Confirmation Page**:  
  After submission, the user is redirected to a confirmation page (`submit.ejs`) where the data they entered is displayed. The page includes:
  - A thank you message with the user's full name and feedback.
  - A summary of the user's email, experience, and suggestions.
  - Two buttons:
    - **Submit Another Feedback**: Returns the user to the survey form to submit more feedback.
    - **View All Feedback**: Directs the user to the feedback page to see all survey entries.

- **Feedback Page**:  
  This page displays a table listing all submitted feedback entries from the database. The table includes:
  - **First Name**, **Last Name**, **Email**, **Experience**, and **Suggestions**.
  - A button to **Back to Home Page**, which allows the user to submit another feedback form.

## Known Limitations

- **Database Dependency**:  
  The app relies on a running instance of **MariaDB** for storing and retrieving survey data. If the database isn't set up or is misconfigured, the app will not function properly.

- **Basic Form Validation**:  
  While the form ensures that **First Name**, **Last Name**, and **Email** fields are filled out, there is no validation for the format of the email or other fields. A more robust validation system could improve user experience.

- **No Authentication**:  
  The app does not currently include any authentication or user management system.

- **No Error Handling for Missing or Invalid Data**:  
  The application currently does not handle errors gracefully when data is missing or invalid (if the database connection fails, or invalid data is submitted).

## Topics Covered
- `JavaScript`
- `Node.js & Express`
- `EJS (Embedded JavaScript Templating)`
- `MariaDB & MySQL Workbench`
- `HTML & CSS (Responsive Design)`
// Get the packages 
const express = require('express');
const mariadb = require('mariadb');

// Instantiate an express (web) app
const app = express();

// Define a port number for the app to listen on
const PORT = 3000;

// Configure the database connection
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'customer'
});

// Connect to the database
async function connect() {
    try {
        let conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err) {
        console.log('Error connecting to the database: ' + err);
    }
}

// Tell the app to encode data into JSON format
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

// Define a "default" route
app.get('/', (req, res) => {
	// testing usability
	console.log("Hello, world - server!");
    
    // Display home page
    res.render('home');
});

// Define a "submission" route
app.post('/submission', async (req, res) => {
    // Get the data from the form
    const details = req.body;
    console.log(details);

    const conn = await connect();
    await conn.query(`INSERT INTO survey (fname, lname, email, experience, suggestions)
    VALUES(
        '${details.fname}', 
        '${details.lname}', 
        '${details.email}', 
        '${details.experience}', 
        '${details.suggestions}')`);

    // Render the submit page, and pass the form data
    res.render('submit', { details: details });
});

// Define a "feedback" route to display all feedback
app.get('/feedback', async (req, res) => {
    const conn = await connect();
    try {
        const feedbackRecords = await conn.query('SELECT * FROM survey ORDER BY timestamp DESC');
        res.render('feedback', { feedbacks: feedbackRecords });
    } catch (err) {
        console.log('Error retrieving feedback data: ' + err);
    }
});

// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
// Get the express package 
const express = require('express');

const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'feedback'
});

// Instantiate an express (web) app
const app = express();
// Define a port number for the app to listen on
const PORT = 3000;

async function connect() {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err) {
        console.log('Error connecting to DB: ' + err);
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
    res.render('home');
});

app.post('/submission', async (req, res) => {
    const details = req.body;
    console.log(details);
    const conn = await connect();
    await conn.query(
        `INSERT INTO feedback (
            firstname,
            lastname, 
            email,
            feedback, rating
        )
        VALUES (
                '${details.fname}', 
                '${details.lname}', 
                '${details.email}', 
                '${details.suggestions}', 
                '${details.experience}'
            )`
        );
    res.render('submit', { details: details });
});



// Define a route to fetch and display all feedback
app.get('/feedback', async (req, res) => {
    const conn = await connect();
    try {
        const feedbackRecords = await conn.query('SELECT * FROM feedback ORDER BY created_at DESC');
        res.render('feedback', { feedbacks: feedbackRecords });
    } catch (err) {
        console.log('Error retrieving feedback data: ' + err);
    }
});

app.get('/feedback', (req, res) => {
    res.render('feedback');  // Renders the 'feedback.ejs' view
});

app.get('/home', (req, res) => {
    res.render('home');  // Renders the 'home.ejs' view again
});

// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});

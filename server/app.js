const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// In-memory user database
const users = [];

// Register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }
  const newUser = { username, password };
  const user = users.find((u) => u.username === username);
  if (user) {
    return res.status(401).send('User already exists');
  }

  users.push(newUser);
  console.log(users)
  res.status(201).send('User registered successfully.');
});

// Login and authenticate a user
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).send('Invalid username or password.');
  }
  res.status(200).send('Login successful.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

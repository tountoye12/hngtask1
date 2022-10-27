// Require express
const { json } = require("express");
const express = require("express");

const cors = require("cors");
//Initialize express
const app = express();

// Set the port
const port = process.env.PORT || 3000;

//set cors policy

app.use(cors());

//Parse json data
app.use(express.json());

//Parse url encoded data

app.use(express.urlencoded({ extended: true }));

//Create a users list
const user = [
  {
    slackUsername: "Diallo",
    backend: true,
    age: 30,
    bio: "My name is diallo, I like to learn new technologies and share them",
  },
];

app.get("/api/user", (req, res) => {
  // retrieve the user
  try {
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrive the user",
    });
  }
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

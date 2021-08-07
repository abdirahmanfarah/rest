const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const postsRoute = require("./routes/posts");

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongodb connected....");
  });

// Middleware
// app.use('/posts', () => {
//     console.log("This is a middleware that is running")
// })

app.use("/posts", postsRoute);

// Routes

app.get("/", (req, res) => {
  res.send("Running on port 3000");
});

app.listen(3000);

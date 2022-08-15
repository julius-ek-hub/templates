require("dotenv").config();

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const auth = require("./routes/auth");
const expressSession = require("express-session");

require("./passport");

const app = express();

app.use(
	expressSession({
		resave: true,
		saveUninitialized: true,
		secret: "mySessionSecrete",
	}),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.session());
app.use(passport.initialize());
app.use("/auth", auth);

app.get("/", (req, res) => {
	res.send("Hello world");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

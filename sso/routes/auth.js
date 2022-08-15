const express = require("express");
const passport = require("passport");

const Router = express.Router();

Router.get("/google", passport.authenticate("google"));
Router.get("/facebook", passport.authenticate("facebook"));

Router.get(
	"/google/oauth2/redirect",
	passport.authenticate("google", {
		failureRedirect: "/google",
		failureMessage: true,
	}),
	function (req, res) {
		res.redirect("/");
	},
);

Router.get(
	"/facebook/oauth2/redirect",
	passport.authenticate("facebook", {
		failureRedirect: "/facebook",
		failureMessage: true,
	}),
	function (req, res) {
		res.redirect("/");
	},
);

module.exports = Router;

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const { env } = require("process");
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:4000/auth/google/oauth2/redirect",
			scope: ["profile"],
			state: true,
		},
		function verify(accessToken, refreshToken, profile, done) {
			console.log(accessToken, refreshToken, profile._json);
			done(null, profile);
		},
	),
);

passport.use(
	new FacebookStrategy(
		{
			clientID: env.FACEBOOK_APP_ID,
			clientSecret: env.FACEBOOK_APP_SECRET,
			callbackURL: "http://localhost:4000/auth/facebook/oauth2/redirect",
			profileFields: ["id", "displayName", "photos", "email"],
		},
		function verify(accessToken, refreshToken, profile, done) {
			console.log(profile);
			done(null, profile);
		},
	),
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

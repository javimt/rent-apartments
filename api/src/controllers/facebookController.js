const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/User");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3001/auth/facebook/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({
          where: { email: profile.emails[0].value },
        });

        if (existingUser) {
          return done(null, existingUser);
        } else {
          const newUser = await User.create({
            email: profile.emails[0].value,
            // Puedes registrar otros campos como nombre, imagen, etc.
          });
          return done(null, newUser);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

module.exports = passport.authenticate("facebook", {
  scope: ["email", "profile"],
});
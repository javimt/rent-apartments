const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../../db");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5173/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
console.log("Google profile data:", profile);
        const existingUser = await User.findOne({
          where: { email: profile.emails[0].value },
        });

        if (existingUser) {
console.log("Existing user:", existingUser);
          return done(null, existingUser);
        } else {
  console.log("Creating new user...");
          const newUser = await User.create({
            email: profile.emails[0].value,
            full_name: "", 
            password: "",
          });
  console.log("New user created:", newUser);
          return done(null, newUser);
        }
      } catch (error) {
  console.error("Error in Google authentication:", error);
        return done(error);
      }
    }
  )
);

module.exports = passport.authenticate("google", {
  scope: ["email", "profile"],
});

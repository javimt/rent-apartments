const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
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

// Exportar la estrategia de autenticación para usar en rutas
module.exports = passport.authenticate("google", {
  scope: ["email", "profile"],
});
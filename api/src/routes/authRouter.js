const { Router } = require("express");
const passport = require("passport");
const googleAuthController = require("../controllers/googleController");
const facebookAuthController = require("../controllers/facebookController");

const router = Router();

router.get("/google", googleAuthController);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/apartments",
    failureRedirect: "/login",
  })
);
router.get("/facebook", facebookAuthController);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/apartments", 
    failureRedirect: "/login", 
  })
);

module.exports = router;

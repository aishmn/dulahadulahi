const express = require("express");
const profileController = require("../controllers/profileController");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/").get(authController.protect, profileController.getAllProfile);
router.get("/me", authController.protect, profileController.getMyProfile);
router
  .route("/:id")
  .patch(authController.protect, profileController.updateProfile);

module.exports = router;

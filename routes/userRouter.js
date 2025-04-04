const express = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();
const {
  Signup,
  Login,
  ForgotPassword,
  VerifyOTP,
  ResetPassword,
  Dashboard,
  RegisterAdmin,
  Loginadmin,
  AllUSers,
  GetUserDetails,
  DeleteUser,
  GetAllAdmins,
  EditProfile,
  GoogleLoginOrSignup,
  loginWithApple
} = require("../controllers/userController");

router.post("/signup", Signup);
router.post("/google", GoogleLoginOrSignup);
router.post("/login", Login);
router.post("/forgot-password", ForgotPassword);
router.post("/verify-otp", VerifyOTP);
router.post("/reset-password", ResetPassword);

// Admin Routes
router.get("/getdashboard", Dashboard);
router.post("/registeradmin", upload.single("image"), RegisterAdmin);
router.post("/loginadmin", Loginadmin);
router.get("/getalluser", AllUSers);
router.get("/getUserById/:userId", GetUserDetails);
router.delete("/deleteuser/:userId", DeleteUser);
router.get("/getalladmin", GetAllAdmins);
router.put("/edittadmin/:userId", EditProfile);
router.post("/applelogin",loginWithApple)
module.exports = router;

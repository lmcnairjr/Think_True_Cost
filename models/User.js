const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
      minlength: 8,
    },
    googleId: { type: String, unique: true, sparse: true },
    country: {
      type: String,
      // required: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    userType: {
      type: String,
      default: "",
    },
    account_type:{
      type:String,
      default:""
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);

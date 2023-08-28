import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile:{
      type: String,
      required: true,
    },
    image: { type: String }, 
    role: { type: String, enum: ["user", "admin"], default: "user" }, 
    waitTime: { type: Number, min: 0, max: 100 },
    volume: { type: Number, min: 0, max: 100 },
    numberOfPeople: { type: Number },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;

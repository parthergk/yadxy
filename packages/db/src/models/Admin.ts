import { bcryptjs } from "@repo/auth";
import { model, Schema } from "mongoose";

const adminSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (this.isModified("password") && this.password) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

const Admin = model("Admin", adminSchema);
export default Admin;
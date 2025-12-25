import mongoose, { model, models, Schema, Model } from "mongoose";
import { bcryptjs } from "@repo/auth";
import { IUser } from "@repo/types";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, default: null },
    email: { type: String, required: true, unique: true },
    phone: { type: String, default: null, sparse: true },
    password: { type: String},
    isVerified: { type: Boolean, default: false, required: true },
    profileComplete: {type: Boolean, default: false, required: true},
    tuitionClassName: { type: String, default: null },

    verificationToken: { type: String, default: null },
    verifyCode: { type: String, minlength: 4 },
    verifyCodePurpose: { type: String },
    verifyCodeExpires: { type: Number },

    plan: {
      currentPlanId: {
        type: mongoose.Types.ObjectId,
        ref: "Plan",
        required: true
      },

      trial: {
        status: {
          type: String,
          enum: ["not_started", "active", "expired"],
          default: "not_started"
        },
        startedAt: { type: Date, default: null },
        endsAt: { type: Date, default: null }
      },

      subscription: {
        status: {
          type: String,
          enum: ["NONE", "ACTIVE", "CANCELLED"],
          default: "NONE"
        },
        startedAt: { type: Date, default: null },
        endsAt: { type: Date, default: null }
      }
    }
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password") && this.password) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

const User = (models.User as Model<IUser>) || model<IUser>("User", userSchema);

export default User;

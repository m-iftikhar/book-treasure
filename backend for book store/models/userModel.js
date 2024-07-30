import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    confirmPassword: {
      type: String,
      required: true
    },
    city: { type: String, required: true },
    userType: { type: String, required: true },
    referenceCode: { type: String},
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },

    isBlocked: {type: Boolean, default: false},

  
   addToCart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  }],
    
    address: {
      type : String,
    },

    refreshToken:{type: String },

   passwordChangedAt: Date,
   passwordResetToken: String,
   passwordResetTokenExpiresAt: Date,

  },

  {
    timestamps: true
  }
);


userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = this.password;
  
  }
  next();
});

userSchema.methods.isPasswordMatch = async function(enterdPassword){
return await bcrypt.compare(enterdPassword, this.password)
}

userSchema.methods.createPasswordResetToken = async function(){
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.passwordResetTokenExpiresAt = Date.now() + 30 * 60 * 1000;
  return resetToken
}


const User = mongoose.model('User', userSchema)

export default User;
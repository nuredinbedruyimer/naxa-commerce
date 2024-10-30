import mongoose from "mongoose";
import  bcrypt   from "bcrypt";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "User name is required"],  
        trim: true,
        minlength: [3, "User name must be at least 3 characters long"] // Fixed "minLength" to "minlength"
    },
    email: {
        type: String,
        required: [true, "Email is required"],  
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please use a valid email address"] // Email validation regex
    },
    password: {
        type: String,
        required: [true, "Password is required"],  
        minlength: [8, "Password must be at least 8 characters long"]
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
}, { 
    timestamps: true  // Moved this outside the fields definition
});


UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();

    try {

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();


        
    } catch (error) {
        next(error)
        
    }
})


UserSchema.methods.isPasswordCorrect = async function(loginPassword) {
    return await bcrypt.compare(loginPassword, this.password);
};

const User = mongoose.model("User", UserSchema)

export default User
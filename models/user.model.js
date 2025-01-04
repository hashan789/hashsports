import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'Password must be at least 8 characters']

    },
    cartItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    }
}, { timestamps: true })


//pre-save hook to hash the password before saving to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePasswords = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;
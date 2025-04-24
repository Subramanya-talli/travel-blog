const {Schema, model} = require("mongoose")
const bcrypt = require("bcrypt");
const secret_key = process.env.my_secret_key;

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim : true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim : true,
        validate: {
            validator : function()
            {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message : "Invalid Email Address"
        }
    },

    password : {
        type: String,
        required: true,
        trim : true
    },
    
    profileImg : {
        type: String,
        default : ""
    }
}, {
    timeStamps : true
});

userSchema.pre('save', (next)=>{
    if(!this.ismodified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(secret_key, salt, function(err, hashedPassword){
            this.password = hashedPassword;
        })
    })
})


const User = model('User', userSchema);



module.exports = User;
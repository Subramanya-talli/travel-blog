const {Schema, model} = require("mongoose")

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


const User = model('User', userSchema);

module.exports = User;
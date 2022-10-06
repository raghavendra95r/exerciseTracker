const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({

    //user Schema
    username : { 
        type:String,
        required: true ,
        unique:true,
        trim:true,
        minLength:3
    },
},{
    //adding timestamps
        timestamps:true,
    
});


const User = mongoose.model('User', userSchema);
//exporting the user model
module.exports=User;
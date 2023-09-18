import moongoose from 'mongoose'
const userSchema = new moongoose.Schema({
    username:{
        type : String,
        required: true,
        unique: false,
        maxLength:50,
        minLength:4,
    },
    email:{
        type: String,
        required: true,
        unique: false,
        maxLength:30,
        minLength:5,

    },
    phone:{
        type: Number,
        required: true,
        unique: false,
        maxLength:30,
        minLength:5,

    },
    dob:{
        type: Number,
        required: true,
        unique: false,
        maxLength:30,    

    },

    gendar:{
        type: String,
        required: true,
        unique: false,
        default: false,
    
    },

    fname:{
        type: String,
        required: false,
        unique: false,
        maxLength:30,
        minLength:5,

    },
    lname:{
        type: String,
        required: false,
        unique: false,
        maxLength:30,
        minLength:5,

    },
    Comment:{
        type: "string",
        required: true,
        unique: false,     
        maxLength: 100,
        minLength: 5,  
       
    },
    option:{
        type: String,
        required: false,
        unique: false,       

    },
    experince:{
        type: String,
        required: false,
        unique: false,       

    },

    
})

const user = moongoose.models(`user`,userSchema)
export default user
//name
//email
//password
//profile_img
//blogs=[]
//following

const mongoose=require("mongoose")

const userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
 },
        email:{
            type:String,
            unique:true,
            require:true,
            lowercase:true
        },
        password:{
            type:String,
            require:true
        },
        profile_img:{
            type:String
            //required :true
        },
        blogs:{
            type:true
        },
        bio:{
            type:true
        },
        followers:{
            type:Array,
        },
        following:{
            type:Array
        }
    }
)
const mongoose=require('mongoose')
const validator=require('validator')
const shortid=require('shortid')
const urlschema=new mongoose.Schema({
    Fullurl:{
        type:String,
        required:true,
        
    },

    Shorturl:{
        type:String,
        required:true,
        default:shortid.generate
    },

    Clicks:{
        type:Number,
        required:true,
        default:0
    },

    CreatedAt:{
        type:Date,
        default:Date.now()

    }},
    {
     collection:"URL"
    }
)

const Urlmodel= mongoose.model("URL",urlschema)
module.exports={Urlmodel}
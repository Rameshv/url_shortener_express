const mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    url: String,
    short_url: String,
    code: {type:String,index:true},
    shorted: {type:Number,default:1},
    used: {type:Number,default:0},
    is_active: {type:Boolean,index:true,default:true},
    created_at: {type:Date, default: Date.now}
})

module.exports = mongoose.model('URL',URLSchema)
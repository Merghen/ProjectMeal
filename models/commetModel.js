import mongoose from "mongoose";

const commentSchema = mongoose.Schema({

        name:{
            type:String,
            required:true
        },
        surname: {
            type:String,
            required:true
        },
        comment:{
            type:String,
            required:true
        },
        mealId:{
            type:[String],
            required:true
        },
        createdAt:{
            type: Date,
            default: Date.now()
        }

});

const Comment = mongoose.model('Comment', commentSchema);

export {Comment};   

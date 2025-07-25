
import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    description : {
        type : String,
        required : true
    },
    website : {
        type : String,

    },
    location : {
        type : String,
        
    },
    employess : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Employee"
    }],
    logo : {
        type : String, // URL for logo.
    },
    userId : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
],
},
{
    timestamps : true,
}
);

export const Company = mongoose.model("Company", companySchema);

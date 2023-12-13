import { Schema , model } from "mongoose"

const UserSchema = new Schema({
    name: {
        type : "String",
        default: "-"
    },
    email: {
        type: "String",
        required : true,
        unique : true
    },
    number: {
        type: "String",
        required : true,
        unique : true
    },
    password: {
        type: "String",
        required : true,
    }
})
const userData = model('userData', UserSchema);
export default userData;

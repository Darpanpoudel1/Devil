import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
    userId: {
        type: String,
    },
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    privateId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    enrolledDate: {
        type: String,
        required: true,
    },

})

const ClientModel = mongoose.models.ClientModel || mongoose.model("ClientModel", clientSchema);

export default ClientModel;
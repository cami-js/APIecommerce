import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['client', 'seller', 'admin'], default: 'client' }
}, {
    timestamps: true
});

export default model('User', UserSchema);

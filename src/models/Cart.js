import { Schema, model } from 'mongoose';

const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
        product: { type: Schema.Types.ObjectId, ref: 'products', required: true },
        quantity: { type: Number, required: true },
    }]
}, {
    timestamps: true
});

export default model('Cart', CartSchema);

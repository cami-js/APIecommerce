import { Schema, model } from 'mongoose';

const TransactionSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'products', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, required: true },
    tipo: { type: String, enum: ['compra', 'venta'], required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true
});

export default model('transactions', TransactionSchema);

import Transaction from '../models/Transaction.js';

class TransactionService {
    async findAll() {
        return await Transaction.find().populate('product').populate('user');
    }

    async findById(id) {
        return await Transaction.findById(id).populate('product').populate('user');
    }

    async create(transaction) {
        return await Transaction.create(transaction);
    }

    async update(id, transactionData) {
        return await Transaction.findByIdAndUpdate(id, transactionData, { new: true });
    }

    async delete(id) {
        return await Transaction.findByIdAndDelete(id);
    }
}

export default new TransactionService();

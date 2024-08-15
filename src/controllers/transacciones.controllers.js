import TransactionService from "../services/TransactionService.js";

class TransactionController {
    async getTransactions(req, res) {
        try {
            const transactions = await TransactionService.findAll();
            if (!transactions.length) {
                return res.status(404).json({ message: 'No se han encontrado transacciones' });
            }
            return res.json(transactions);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async createTransaction(req, res) {
        try {
            await TransactionService.create(req.body);
            return res.status(201).json({ message: 'Transacción creada' });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async updateTransaction(req, res) {
        try {
            const updatedTransaction = await TransactionService.update(req.params.id, req.body);
            return res.json(updatedTransaction);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async deleteTransaction(req, res) {
        try {
            await TransactionService.delete(req.params.id);
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

export default new TransactionController();

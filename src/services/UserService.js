import User from '../models/User.js';

class UserService {
    async findAll() {
        return await User.find();
    }

    async findById(id) {
        return await User.findById(id);
    }

    async create(user) {
        return await User.create(user);
    }

    async update(id, userData) {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserService();

import UserService from "../services/UserService.js";

class UserController {
    async getUsers(req, res) {
        try {
            const users = await UserService.findAll();
            return res.json(users);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async createUser(req, res) {
        try {
            const user = await UserService.create(req.body);
            return res.status(201).json(user);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await UserService.update(req.params.id, req.body);
            return res.json(updatedUser);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async deleteUser(req, res) {
        try {
            await UserService.delete(req.params.id);
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

export default new UserController();

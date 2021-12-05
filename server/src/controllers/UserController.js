const User = require("../models/UserModel")


module.exports = {
    async store(req, res) {
        const { nome, email, senha } = req.body;
    
        const user = await User.create({ 
            // Aqui é onde irei receber os valores do input do front-end pela api e registrar o usuario no sistema.
            nome,
            email, 
            senha
        })

        return res.json(user);
    }
}
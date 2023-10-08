// funciones para el usuario

const registerUser = (req, res) => {
    res.json({ url: "Listar" });
}

const profileUser = (req, res) => {
    res.json({ url: "Perfil" });
}

export {
    registerUser,
    profileUser
}
interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: "Henrique",
        email: "shvr@gmail.com"
    }
}

function setUser(usuario: Usuario) {
    // ...
}
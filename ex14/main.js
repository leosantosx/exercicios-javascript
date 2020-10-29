class Usuario{
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    get isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor() {
        super()
        this.admin = true;
    }

    get isAdmin(){
        return this.admin;
    }
}

const user1 = new Usuario('leo@teste.com', '123');
const user2 = new Admin('leo@teste.com', '321');

console.log(user1.isAdmin);
console.log(user2.isAdmin);
const eventEmitter = require('events');

class Users extends eventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('user logged', data)
        }, 2000);
    }
}

const users = new Users();

users.on('user logged', data => {
    console.log(data);
});

console.log('Iniciando a execução do código...');
users.userLogged({user: 'Moises Oliveira'});
users.userLogged({user: 'José Ferreira'});
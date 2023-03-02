const assert = require('assert');
const Math = require('../math.js')

let value = 0;

describe('Math class', function() {
    //hooks
    beforeEach(function() {
        value = 0;
    })
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });
    it('multiply two numbers', function() {
        const math = new Math();
        assert.equal(math.multiply(value,5), 0);
    });
});
//sempre usar function padrão no mocha para poder usar o this no contexto certo
//usar done para alterar o momento que ele considera o teste finalizado para execuções assíncronas
// usar "it.only" para testar apenas uma coisa
//método it.skip para deixar pendente


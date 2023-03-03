const assert = require('assert');
const Math = require('../math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

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
            expect(value).to.equal(10);
            done();
        });
    });
    it('multiply two numbers', function() {
        const math = new Math();
        const obj = {name: 'Moisés Oliveira'};
        const obj2 = {name: 'Moisés Oliveira'};
        
        expect(obj).to.have.property('name').equal('Moisés Oliveira');
        expect(math.multiply(value,5)).to.equal(0);
        expect(obj).to.deep.equal(obj2);
    });
    it.only('Calls res with sum and index value', function() {
       const req = {};
       const res = {
        load: sinon.spy()
       };
       const math = new Math();

       math.printSum(req, res, 5, 5);

       expect(res.load.calledOnce).to.be.true;
       expect(res.load.args[0][1]).to.equal(10);
    })
});
//sempre usar function padrão no mocha para poder usar o this no contexto certo
//usar done para alterar o momento que ele considera o teste finalizado para execuções assíncronas
// usar "it.only" para testar apenas uma coisa
//método it.skip para deixar pendente
//com o sinon posso verificar se a função foi chamada, fazer um return customizado e retornar o método ao normal


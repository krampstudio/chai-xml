var chai    = require('chai'); 
var expect  = require('chai').expect;
var chaiXml = require('../src/chai-xml');

chai.use(chaiXml);

describe('XML assertions', function(){

    describe('foo', function(){
        it("should be a chai assertion method", function(){

            expect(chai.Assertion.prototype.foo).to.be.a('function');
        });
    }); 

});

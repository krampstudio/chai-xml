/**
 * @author Bertrand Chevrier <chevrier.bertrand@gmail.com>
 * @license MIT <https://raw.githubusercontent.com/krampstudio/chai-xml/master/LICENSE>
 */

var chai    = require('chai'); 
var expect  = require('chai').expect;
var chaiXml = require('../src/chai-xml');

//loads the plugin
chai.use(chaiXml);

describe('chai-xml : ', function(){

    describe('the xml member', function(){
        it("should be a chai property", function(){
            expect(chai.Assertion.prototype.__lookupGetter__('xml')).to.be.a('function');
        });
        it("should apply only on strings", function(){
            expect('foo').xml.to.be.a('string');
        
            expect(function(){ 
                expect({}).xml; 
            }).to.throw();

            expect(function(){ 
                expect(1).xml; 
            }).to.throw();
        });
    }); 

    
    describe('the valid member', function(){
        it("should be a chai method", function(){
            expect(chai.Assertion.prototype.valid).to.be.a('function');
        });
        
        it("should fail when object is invalid XML", function(){
            [ '<root><child/>',
              '<root><child>value</root></child>',
              '<root>><</root>'
            ].forEach(function(value){
              expect(value).xml.not.valid();
            });
        });
        it("should sucssed on valid XML", function(){
            [ '<root><child/></root>',
              '<root><child>value</child></root>',
              '<root>&gt;&lt;</root>'
            ].forEach(function(value){
              expect(value).xml.valid();
            });
        });
    });
    
    describe('the equal member', function(){
        it("should be a chai method", function(){
            expect(chai.Assertion.prototype.equal).to.be.a('function');
        });
        it("should not affect overriden beahvior", function(){
            expect(true).to.equal(true);
            expect(true).to.not.equal(false);
            expect(null).to.equal(null);
            expect('foo').to.equal('foo');
            expect('foo').to.not.equal('bar');
            expect(true).to.equal(true);
        });
        
        it("should compare XML", function(){
            expect('<root><child></child></root>').xml.to.equal('<root><child></child></root>');
            expect('<root><child></child></root>').xml.to.equal('<root><child /></root>');
            expect('<root><child></child></root>').xml.to.not.equal('<root><children /></root>');
            expect('<root>\n\t<child name="foo" value="bar"></child>\n</root>').xml.to.equal('<root><child value="bar" name="foo" /></root>');
        });
    });
    
    describe('the equal aliases', function(){

        it("should also compare XML", function(){
            var actual = '<root>\n\t<child name="foo" value="bar"></child>\n</root>';
            var expected = '<root><child value="bar" name="foo" /></root>';
            expect(actual).xml.to.equal(expected);
            expect(actual).xml.to.eq(expected);
            expect(actual).xml.to.equals(expected);

        });
    });
});

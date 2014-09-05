
var chaiXmlPlugin = function chaiXmlPlugin(chai, utils){
    var flag = utils.flag;

    chai.Assertion.addMethod('foo', function (value) {
        this.assert(
            flag(this, 'object') === value, 
            'expected #{this} to equals #{exp}', 
            'expected #{this} not to have id #{exp}', 
            value
        );
    });


};

module.exports = chaiXmlPlugin;

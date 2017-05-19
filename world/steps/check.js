const defineSupportCode = require('cucumber').defineSupportCode;
const expect = require('chai').expect;

defineSupportCode(function({ Then }) {
    Then('I end up with {int}', function (input) {
        expect(this.answer).to.equal(input);
    });

});


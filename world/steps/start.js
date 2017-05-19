const defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({ Given }) {
    Given('I start with {int}', function (input) {
        this.answer = input;
    });
});


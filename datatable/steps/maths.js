const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const expect = require('chai').expect;

defineSupportCode(function({ Given, Then, When }) {
    let answer = 0;

    Given('I start with {int}', function (input) {
        answer = input;
    });

    When('I add the following numbers:', function (table) {
        answer = table.raw()
            .map(row => row[0])
            .map(v => parseInt(v))
            .reduce((current, next) => current + next, answer);
    });


    Then('I end up with {int}', function (input) {
        expect(answer).to.equal(input);
    });

});


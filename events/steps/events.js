const defineSupportCode = require('cucumber').defineSupportCode;
const util = require('util');

defineSupportCode(function({ registerHandler }) {
    [
        'BeforeFeatures',
        'BeforeFetaure',
        'BeforeScenario',
        'BeforeStep',
        'StepResult',
        'AfterStep',
        'ScenarioResult',
        'AfterScenario',
        'AfterFeature',
        'FeaturesResult',
        'AfterFeatures'
    ].forEach((eventName) => {
        registerHandler(eventName, function(step) {
            console.log('Handling event: ' + eventName + ' = ' + util.inspect(step));
        });
    });


});



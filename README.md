# Introduction to Cucumber.js - Examples

This repository exists as a set of example implementations of Cucumber.js functionality. 

# Examples
This repository has the following set of examples:

* simple - A very simple example that does nothing special
* background - Identical to the 'simple' example in terms of Javascript, but using a Background for common initialisation
* outline - Identical to the 'simple' example in terms of Javascript, but using a Scenario Outline to generate Scenarios
* datatable - Adaptation of the 'simple' example to use a Data Table to add an arbitrary list of numbers
* hooks - Demonstration of a Before hook for resetting data
* events - Demonstration of event handling for the lifecycle of running tests
* world - Demonstration of the World concept for data sharing

# Running examples

The examples are all set up to run with either NPM Scripts, Grunt or Gulp. They can all be run as either:

* npm run-script <example>
* grunt shell:<example>
* gulp <example>

For example, `npm run-script simple`, `grunt shell:background` or `gulp outline`.

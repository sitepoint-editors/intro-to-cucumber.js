module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	shell: {
		simple: {
            command: 'cucumber.js simple/features -r simple/steps'
		},
		background: {
            command: 'cucumber.js background/features -r background/steps'
		},
		outline: {
            command: 'cucumber.js outline/features -r outline/steps'
		},
		datatable: {
            command: 'cucumber.js datatable/features -r datatable/steps'
		},
		hooks: {
            command: 'cucumber.js hooks/features -r hooks/steps'
		},
		world: {
            command: 'cucumber.js world/features -r world/steps'
		},
		events: {
            command: 'cucumber.js events/features -r events/steps'
		}
	}
});

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-shell');
};

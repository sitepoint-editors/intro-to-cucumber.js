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
		}
	}
});

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-shell');
};

module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	shell: {
		simple: {
            command: 'cucumber.js simple/features -r simple/steps'
		},
		background: {
            command: 'cucumber.js background/features -r background/steps'
		}
	}
});

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-shell');
};

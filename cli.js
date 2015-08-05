#! /usr/bin/env node
var file_stream = require('fs');
var source = process.argv[2];
var output = process.argv[3];
var jsonToSass = require('./index');

if (!source) {
	console.log('Source location not specified');
	return;
}

if (!output) {
	console.log('Output location not specified');
	return;
}

file_stream.readFile(source, 'utf8', readJSON);

function readJSON (error, data) {
	var scss = jsonToSass(data);

	if(scss !== undefined) {
		writeSass(scss);
	}
	
}

function writeSass(scss) {
    file_stream.writeFile(output, scss, 'utf8', function (error) {
        console.log('Writen output to sass');
    });
}
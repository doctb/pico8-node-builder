const buildFiles = require('./src/build.json');
const fs = require('fs');

let index = 0;
let build = '';

let systemHeader = '';
let systemFooter = '';

const HEADER_LIMIT = '__lua__';
const FOOTER_LIMIT = '__gfx__';
const SEPARATOR = 'X{||SEPARATOR||}X';

const startBuild = () => {
	// read original file
	fs.readFile('./' + buildFiles.filename, 'utf8', (err, data) => {
		if (err) throw err;

		// retrieve header and footer from original file
		let s = data.split(HEADER_LIMIT).join(SEPARATOR).split(FOOTER_LIMIT).join(SEPARATOR).split(SEPARATOR);
		systemHeader = s[0] + HEADER_LIMIT;
		systemFooter = FOOTER_LIMIT + s[2];

		// start reading files to compile
		readNextFile();
	});
}

const readNextFile = () => {
	// no more files to read, let's write the output
	if (!buildFiles.files[index]) {
		return writeFile();
	}
	// read file
	let filePath = 'src/' + buildFiles.files[index];
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) throw err;
		build += data + "\n";
		index++;
		readNextFile();
	});
}

const writeFile = () => {
	build = systemHeader + "\n" + build + "\n" + systemFooter;
	fs.writeFile('./' + buildFiles.filename, build, (err) => {
		if (err) throw err;
		console.log(buildFiles.filename + ' generated');
	});
}

startBuild();

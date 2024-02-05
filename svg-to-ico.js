const fs = require('fs');
const svg2img = require('svg2img');

const inputSVGPath = "input/" + process.argv[2];
const outputICOPath = "output/" + process.argv[3];

if (!inputSVGPath || !outputICOPath) {
    console.error('Usage: node main.js <inputSVGPath> <outputICOPath>');
    process.exit(1);
}

const svgString = fs.readFileSync(inputSVGPath, 'utf8');

svg2img(svgString, function(error, buffer) {
    if (error) {
        console.error('Error:', error);
        return;
    }

    fs.writeFileSync(outputICOPath, buffer);
    console.log('ICO file saved successfully.');
});
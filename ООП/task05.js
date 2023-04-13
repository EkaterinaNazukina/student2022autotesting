const fs = require('fs');
var _ = require('lodash');

function colorToHex(color) {
    const hex = color.toString(16)
    return hex.length == 1 ? '0' + hex : hex
}



function createCollorObject(colorName, argbArray) {
    return {
    color: colorName,
    hex_name: '#' + _(argbArray).slice(0, 3).map(colorToHex).join('')};
}


let data = require('./json/data.js');

let orderedAndFilteredColor = _(data.colors)
    .zipWith(data.argb, createCollorObject)
    .orderBy('color')
    .value();

console.log(orderedAndFilteredColor);

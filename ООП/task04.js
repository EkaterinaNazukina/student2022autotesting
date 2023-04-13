const fs = require('fs');
var _ = require('lodash');

function get_collor_object(items) {
    return { color: items[0], rgb: items[1].slice(0, 3) };
}


function order_and_filter(colors) {
    return _(colors)
        .map(x => Object.entries(x)[0])

//        .map(items => ({color: items[0], rgb: items[1].slice(0, 3)}))  // 1 вариант

        .map(get_collor_object)  // 2 вариант

//        .map(items => _.zipObject(['color', 'rgb'], items))  // 3 вариант
//        .map(x => _.assign(x, {'rgb': x.rgb.slice(0, 3)}))   // 3

        .sortBy('color')
        .value();
}


let colors = require('./json/colors.json');

console.log(order_and_filter(colors));

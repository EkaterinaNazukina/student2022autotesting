const fs = require('fs');
var _ = require('lodash');


function genderOrder(user) {
	return ["female", "male"].indexOf(user.gender);
}


function orderClients(clients) {
}



let colors = require('./json/colors.json');


let orderedAndFilteredColor = _(colors)
    .map(x => _.keys(x)[0])
    .filter(x => x.length < 6)
    .sortBy()
    .value();

console.log(orderedAndFilteredColor);

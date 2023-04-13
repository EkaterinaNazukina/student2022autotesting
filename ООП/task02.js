const fs = require('fs');
var _ = require('lodash');


function genderOrder(user) {
	return ["female", "male"].indexOf(user.gender);
}


function orderClients(clients) {
    let filteredClients = _.filter(clients, client => client.address.city == "Кунгур");

    return _.orderBy(filteredClients, [genderOrder, 'age', 'name'], ['asc', 'desc', 'asc']);
}



let clients = require('./json/clients.json').clients;

let orderedClients = orderClients(clients);

console.log(orderedClients);

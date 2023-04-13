const fs = require('fs');
var _ = require('lodash');

function is_user_in_southern_hemisphere(user) {
	return user.address.geo.lat < 0;
}

function get_short_user_info(user) {
	return {username: user.username, city: user.address.city};
}

function get_people_from_south() {
    let users = require('./json/users.json');

    return _(users)
        .filter(is_user_in_southern_hemisphere)
        .map(get_short_user_info)

        .orderBy('city', 'desc') // 1 вариант

//        .sortBy('city') // 2 вариант
//        .reverse()      // 2

        .value();
}

console.log(get_people_from_south());
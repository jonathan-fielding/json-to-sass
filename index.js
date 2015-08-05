var _ = require('lodash');

module.exports = function(data) {
	var scss = '';

    if (!data) {
    	return;
    }
    
    data = JSON.parse(data);

    _.mapKeys(data, function(value, key) {
		scss+= '$' + key + ': ' + value + ';\r\n'
	});

	return scss;
}
const noble = require('noble');

noble.startScanning([], true);
noble.on('discover', function(peripheral) {
	const data = {};
	data.id = peripheral.uuid;
	data.rssi = peripheral.rssi;
	data.localname = peripheral.advertisement.localName;
	console.log('data: ', data);
	console.log('JSON data: ' + JSON.stringify(data));
});

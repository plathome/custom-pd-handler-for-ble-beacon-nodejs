const noble = require('noble');
const abs = require('abstract-socket');

noble.startScanning([], true);
noble.on('discover', function(peripheral) {
	const data = {};
	data.id = peripheral.uuid;
	data.rssi = peripheral.rssi;
	data.localname = peripheral.advertisement.localName;

	const client = abs.connect('\0/node-red/userdev_0000001.sock', function() {
		console.log('connected!');
		console.log('JSON data: ' + JSON.stringify(data));
		client.end(JSON.stringify(data));
	});
});

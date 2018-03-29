const noble = require('noble');

noble.startScanning([], true);
noble.on('discover', function(peripheral) {
	console.log('id: ' + peripheral.uuid + ' rssi: ' + peripheral.rssi + ' localname: ' +  peripheral.advertisement.localName);
});

# How To Create Custom PD-Handler for BLE beacon with Node.js

## Installation
```
git clone https://github.com/plathome/custom-pd-handler-for-ble-beacon-nodejs.git
cd custom-pd-handler-for-ble-beacon-nodejs
npm install
```

## Usage
* get BLE beacon data
```
node get-ble-beacon.js
```

* create JSON data
```
node create-json-data.js
```

* send JSON data to abstract UNIX domain socket
```
node send-to-abssock.js
```

## Reference


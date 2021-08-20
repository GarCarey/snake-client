//Modules being received from input and client files
const { connect } = require('./client');
const { setupInput } = require('./input');

//printed when we begin connecting to game server
console.log('Connecting ...');
setupInput(connect());
const {RippleAPI} = require('ripple-lib');

const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233' // Ripple testnet
});
api.on('error', (errorCode, errorMessage) => {
  console.log(errorCode + ': ' + errorMessage);
});
api.on('connected', () => {
  console.log('connected');
});
api.on('disconnected', (code) => {
  // code - [close code](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent) sent by the server
  // will be 1000 if this was normal closure
  console.log('disconnected, code:', code);
});
api.connect().then(() => {

const address = 'rLLgkuCQ4og2UiMk7buCYCDSF5nGEWFmsy'; //sender FI
return api.getSettings(address);

}).then(settings => {
	console.log(settings);

}).then(() => {
  return api.disconnect();
}).catch(console.error);
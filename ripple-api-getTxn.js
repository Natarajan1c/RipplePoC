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

/* begin custom code ------------------------------------ */
  const myTXN = 'DECA0DA5B8519BD2F6EC6F250C79E7F85BC61EBCCE30B944EE806E0188AC3127';
  return api.getTransaction(myTXN);

}).then(info => {
  console.log(info);

  /* end custom code -------------------------------------- */

}).then(() => {
  return api.disconnect();
}).catch(console.error);
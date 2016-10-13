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

  const myTxn1 = 'BC044D9647FCE3B53893D56DDB831099639ED3314CF7BFE143DEB7951A3CB6E5

';
  return api.getTransaction(myTxn);

}).then(info => {
  console.log(info);
  console.log('getTXNInfo done');

  /* end custom code -------------------------------------- */

}).then(() => {
  return api.disconnect();
}).catch(console.error);
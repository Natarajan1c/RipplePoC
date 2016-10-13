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

const address = 'rJHbwjUKqe961A9CAqo4iwhQWY9xi1Xgas';
  
const objTL = {
  "currency": "TTT",
  "counterparty": "rLLgkuCQ4og2UiMk7buCYCDSF5nGEWFmsy",
  "ripplingDisabled": false,
  "limit": "10000"
}

return api.prepareTrustline(address, objTL)
}).then( prepared => {
   console.log('prepared trustline :', prepared.txJSON);

const secret = 'shud1FJ6PYAEUUGMXhEgE74CcpTPf';
return api.sign(prepared.txJSON, secret)
}).then (signedTxn => {
   console.log('Signed transaction:', signedTxn.signedTransaction);	
   console.log('Signed transaction id:', signedTxn.id);


return api.submit(signedTxn.signedTransaction)
}).then (result => {
   console.log(' Result code :', result.resultCode);
   console.log(' Result Message :', result.resultMessage);

 
}).then(() => {
  return api.disconnect();
}).catch(console.error);
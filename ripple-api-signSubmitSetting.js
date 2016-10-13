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

// const address = 'rsoJjvMKC748jv2VBuEMLkw2st1bAPNuQU'; //Sender
const address = 'rLLgkuCQ4og2UiMk7buCYCDSF5nGEWFmsy'; //Sender's FI

const objTxn = {
  "defaultRipple": true
};

return api.prepareSettings(address, objTxn)
}).then( prepared => {
   console.log('prepared trustline :', prepared.txJSON);

// const secret = 'sanD6DVaS5sgVWWTTZciZR5x1DAUR'; //sender
const secret = 'snVg94joPmHaiiUbmRyWiu1UiUwFL'; //sender's FI

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
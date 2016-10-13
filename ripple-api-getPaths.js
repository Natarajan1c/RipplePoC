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

const pathfind = {
  "source": {
   "address": "rsoJjvMKC748jv2VBuEMLkw2st1bAPNuQU",
  },
  "destination": {
    "address": "rEgnH8dMnLiVxj311ei57CmcexnsGo92iB",
    "amount": {
      "currency": "USD",
      "counterparty": "r9rktS4xQkPmKEqbAyBs7aYHr6v1vCeK5Q",
      "value": "0"
    }
	
   }
};

}).then(paths => {
  console.log(paths);


}).then(() => {
  return api.disconnect();
}).catch(console.error);
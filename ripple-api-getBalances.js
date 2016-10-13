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
  const senderAddress = 'rsoJjvMKC748jv2VBuEMLkw2st1bAPNuQU';  //Sender
  return api.getBalances(senderAddress);

}).then(info => {
  console.log("Sender: ");
  console.log(info);
  console.log(" ");

}).then (() => {

  const senderFIAddress = 'rLLgkuCQ4og2UiMk7buCYCDSF5nGEWFmsy';  //Sender's FI
  return api.getBalances(senderFIAddress);

}).then(info => {
  console.log("Sender FI: ");
  console.log(info);
  console.log(" ");

}).then (() => {

  const recipientAddress = 'rEgnH8dMnLiVxj311ei57CmcexnsGo92iB';  //Recipient
  return api.getBalances(recipientAddress);

}).then(info => {
  console.log("Recipient: ");
  console.log(info);
  console.log(" ");

}).then (() => {

  const recipientFIAddress = 'r9rktS4xQkPmKEqbAyBs7aYHr6v1vCeK5Q';  //Recipient's FI
  return api.getBalances(recipientFIAddress);

}).then(info => {
  console.log("Recipient FI: ");
  console.log(info);
  console.log(" ");


}).then (() => {

  const mmAddress = 'rJHbwjUKqe961A9CAqo4iwhQWY9xi1Xgas';  //MM
  return api.getBalances(mmAddress);

}).then(info => {
  console.log("Market Maker: ");
  console.log(info);
  console.log(" ");

  /* end custom code -------------------------------------- */

}).then(() => {
  return api.disconnect();
}).catch(console.error);
'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
//  server: 'wss://s1.ripple.com' // Public rippled server
    server: 'wss://s.altnet.rippletest.net:51233'
});
api.connect().then(() => {
  /* begin custom code ------------------------------------ */
  const myAddress = 'rfeQauSRJLjZ2Pp8b27v1Q48b359vajM6J';

  console.log('getting account info for', myAddress);
  return api.getAccountInfo(myAddress);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');

  /* end custom code -------------------------------------- */
}).then(() => {
  return api.disconnect();
}).then(() => {
  console.log('done and disconnected.');
}).catch(console.error);
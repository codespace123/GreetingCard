console.log("version: " + Web3.version);
function fromHex(h) {
    var s = ''
    for (var i = 0; i < h.length; i+=2) {
        s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
    }
    return decodeURIComponent(escape(s));
}

async function myFetch() {
  let web3 = await new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/5334d7957c024b359dcb1dbc7275c4cd"));
  let myEntry  = await web3.eth.getTransaction('0x5b8e2f3e86cc345dee2d7d20373548d68088f7c53774a56fed0015b66410fb33');
  console.log(myEntry.input);
  let x = await fromHex(myEntry.input.substring(2));
  display_txt = x.replace(/\n/g, "<br />");
  document.getElementById("text").innerHTML = display_txt;
  return {
        myEntry
  };
}
myFetch().then(function(data) {
    console.log('all is complted', data.input);
});

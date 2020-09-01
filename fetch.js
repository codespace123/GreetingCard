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
  let myEntry  = await web3.eth.getTransaction('0x51d2baa72696379f25477566014a1d6e417ec7a4b79bf63b52077200b47812e9');
  console.log(myEntry.input);
  let x = await fromHex(myEntry.input.substring(2));
  document.getElementById("text").innerHTML = x;
  return {
        myEntry
  };
}
myFetch().then(function(data) {
    console.log('all is complted', data.input);
});

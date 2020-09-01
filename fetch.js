console.log("version: " + Web3.version);
async function myFetch() {
  let web3 = await new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/5334d7957c024b359dcb1dbc7275c4cd"));
  let myEntry  = await web3.eth.getTransaction('0x51d2baa72696379f25477566014a1d6e417ec7a4b79bf63b52077200b47812e9');
  console.log(myEntry.input);
   $("#text").html("Text added by jQuery code."+myEntry.input);
  return {
        myEntry
  };
}
myFetch().then(function(data) {
    console.log('all is complted', data.input);
});

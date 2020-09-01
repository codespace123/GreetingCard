console.log("version: " + Web3.version);
var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/5334d7957c024b359dcb1dbc7275c4cd"));
var a = web3.eth.getTransaction('0x51d2baa72696379f25477566014a1d6e417ec7a4b79bf63b52077200b47812e9');
console.log(a.input);


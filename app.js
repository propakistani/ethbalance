const Web3 = require('web3');

// Create a Web3 instance using an HTTP provider
const web3 = new Web3('wss://mainnet.infura.io/ws/v3/XXXX');

// Get the balance of a wallet
async function getBalance(walletAddress) {
  const balance = await web3.eth.getBalance(walletAddress);
  return web3.utils.fromWei(balance, 'ether');
}

// Call the getBalance function with a wallet address and log the result
const walletAddress = '0x1234567890123456789012345678901234567890';
getBalance(walletAddress).then((balance) => {
  console.log(`Wallet balance: ${balance} ETH`);
});

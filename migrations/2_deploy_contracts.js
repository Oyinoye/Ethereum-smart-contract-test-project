const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  // Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()

  //Deploy Ethswap
  await deployer.deploy(EthSwap, token.address);
  const ethSwap = await EthSwap.deployed()

  //Transfer all 1 million tokens to Ethswa
  await token.transfer(ethSwap.address, '1000000000000000000000000')
};
   
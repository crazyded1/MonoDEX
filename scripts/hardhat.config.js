require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19", // Версия компилятора Solidity
  networks: {
    monad: {
      url: "https://testnet-rpc.monad.xyz", // RPC URL для сети Monad
      accounts: [process.env.PRIVATE_KEY], // Приватный ключ из .env
      chainId: 2001, // ID сети Monad
    },
  },
};

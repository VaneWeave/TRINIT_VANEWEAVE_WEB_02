require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const DEPLOYER_KEY = process.env.DEPLOYER_DOC_KEY 
const ENDPOINT_URL = process.env.ENDPOINT_DOC_URL
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_DOC_API_KEY

module.exports = 
{
  defaultNetwork: "hardhat",
  networks:
  {
    hardhat: {},
    
    localhost: 
    {url: 'http://127.0.0.1:8545'},

    goerli: 
    {
      url: ENDPOINT_URL,
      accounts: [DEPLOYER_KEY]
    }
  },

  solidity: 
  {
    version: "0.8.17",
    settings: 
    {
      optimizer: 
      {
        enabled: true,
        runs: 200
      }
    }
  },

  etherscan:
  {
    apiKey: ETHERSCAN_API_KEY,
  },

  paths:
  {
    sources: './contracts',
    tests: './test',
    artifacts: './abis',
    cache: './cache',
  },
  
  mocha:
  {
    timeout: 400000
  }
};
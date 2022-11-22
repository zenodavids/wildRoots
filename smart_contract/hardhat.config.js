// this is just a plugin to build smart contracts test (hardhat-waffle)
require('@nomiclabs/hardhat-waffle')

// in here, we will export our hardhat config
module.exports = {
  solidity: '0.8.4',
  networks: {
    // we specify the network we want to work on and its 'ropsten' in this case
    ropsten: {
      // the http key from alchemy.com
      url: 'https://eth-ropsten.alchemyapi.io/v2/QiAIfg8Db1y8-kRBMN0qLh98P9ugNVzh',

      /*this account will be an array and to get this account, we click on the metamask extension, click on the three dots at the top right-end corner, 'account details' and 'export private key'.*/
      accounts: [
        'fc4a7842e90d57d8c323e2554e2337ebfd1116a6c676d16a329a2ba118620df5',
      ],
    },
  },
}

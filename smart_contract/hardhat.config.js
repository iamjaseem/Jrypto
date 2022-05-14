require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/Hl_IjR76id-xa-lSKJqNw7eHm-BEG3DO',
      accounts: ['d860d1817966ab0899cbddc6c1c0e54266f6045106ea1aff6bb810a705f5d08c'],
    },
  },
};
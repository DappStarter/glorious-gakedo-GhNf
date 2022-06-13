require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain umbrella hidden clinic bridge giggle'; 
let testAccounts = [
"0xa06c45f35c23a5e5b61c0c81d5dbd1c8cb2175cda24973ee20b2c7bf5e0a730c",
"0x6a5ea044df94dc9f51973a7b6af5e59dea67bbaf59e3134d6fb4f25bc4178be6",
"0x66fcd310c6f39c702865add0abd2fe254276c7012c71c4bba855419ee22604d2",
"0x7ef5e1ab898a58685ac9c397fd7b4430ebf5e3d26fc10243d35bc5e969b53127",
"0x4e2ad1a1ebe13e3e56d1b6de2c9d2ab3bb1d110ad62c0ff39ef0c3340e19505a",
"0xb53ea61c8cf1b8f4184756b79eac40e6e983b9eb4d0fb306d039fa4ed3a5aeee",
"0x04b2f08f188ae9fc32f3b27b49d240408eeed7f15ae625d2592ff1dde1df3666",
"0x050bfc1d31e1303f663266c73f24b464a4d039839b4ff79edb03405e6a158d11",
"0xee75d1e732ba6293fdb2d8072d018730c5f0b7b28a988ea74f879bb87b4c8803",
"0xdc2d73a57e1a64e705198fea128e066228e9c64fd06c697e24a39d321cd79419"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


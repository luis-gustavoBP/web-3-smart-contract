import Web3 from 'web3';

const web3 = new Web3('HTTP://127.0.0.1:7545');
const contractAddress = '0x8e10086B8c3Bd88f8C8D4Cf9c8Cd8d1186f06FFa';

const getAccounts = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log(accounts);
};
getAccounts();
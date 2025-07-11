import Web3 from 'web3';

const web3 = new Web3('HTTP://127.0.0.1:7545');


const addressFrom = '0xdEBb3bf4f74c768be7bA3Ff45d6Fa3F0E17Bc760';
const privateKey = '0xfb0cccd1ce77a008830a91f18e50ccfbc562a02492a0a4c9cd463a5ec8af60c6';
const addressTo = '0xe6069a658d03074e10D33d1E8ea4F1eE1aD924E3';

const main = async () => {
    const tx = await web3.eth.accounts.signTransaction({
        from: addressFrom,
        to: addressTo,
        value: web3.utils.toWei('0.1', 'ether'),
        chainId: 1337,
        hardfork: 'london',
        gas: 21000,
        gasPrice: web3.utils.toWei('10', 'gwei'),
    }, privateKey);

    console.log(tx.rawTransaction);

    const createReceipt = await web3.eth.sendSignedTransaction(tx.rawTransaction);
    console.log(createReceipt.transactionHash);
}
main();


import Web3 from 'web3';

const web3 = new Web3('HTTP://127.0.0.1:7545');


const addressFrom = '';
const privateKey = '';
const addressTo = '';

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


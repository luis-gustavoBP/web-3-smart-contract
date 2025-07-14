import Web3 from 'web3';
import { Transaction } from '@ethereumjs/tx';
import * as Common from '@ethereumjs/common';

const web3 = new Web3('');

const addressFrom = '';
const privateKey = Buffer.from('', 'hex');
const addressTo = '';

const main = async () => {
    const txCount = await web3.eth.getTransactionCount(addressFrom);

    const rawTX = {
        nonce: web3.utils.toHex(txCount),
        from: addressFrom,
        to: addressTo,
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    };

    // Crie um objeto Common para a rede customizada (Ganache)
    const customCommon = Common.default.custom({ chainId: 1337 });

    const tx = Transaction.fromTxData(rawTX, { common: customCommon });

    const signedTx = tx.sign(privateKey);

    const serializedTransaction = signedTx.serialize();

    const receipt = await web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'));
    console.log(receipt.transactionHash);
}
main();


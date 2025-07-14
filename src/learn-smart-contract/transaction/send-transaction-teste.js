import Web3 from 'web3';
import { LegacyTx } from '@ethereumjs/tx';
import { Common, Hardfork, Chain } from '@ethereumjs/common';
import { Buffer } from 'buffer';

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

    const common = Common.forCustomChain(
        Chain.Mainnet,
        { name: 'sepolia', networkId: 11155111, chainId: 11155111 },
        Hardfork.London
    );

    const tx = LegacyTx.fromTxData(rawTX, { common });
    const signedTx = tx.sign(privateKey);
    const serializedTx = signedTx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    try {
        const receipt = await web3.eth.sendSignedTransaction(raw);
        console.log(receipt.transactionHash);
    } catch (err) {
        console.error('Erro ao enviar a transação:', err);
    }
};

main(); 
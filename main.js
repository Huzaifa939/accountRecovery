const {ethers,utils} = require('ethers');
const fs = require('fs');

const provider = new ethers.providers.JsonRpcProvider('https:speedy-nodes.nyc.moralis.io/89f9e10ecc7056e5ba53e173/eth/mainnet') //get free node from moralis.io or infura.com

const mnemonic = 'upset fuel enhance depart portion hope core animal innocent will athlete snack';

const hdNode = utils.HDNode.fromMnemonic(mnemonic);


deriviation = {
     metamask : "m/44'/60'/0'/0/",
     ledger : "m/44'/60'/"

}


const tries = 10;

async function getAccount(){
    for(let i=0;i<tries;i++){
        let path = deriviation.metamask + i;
        console.log(path)
        let a = hdNode.derivePath(path);
        console.log(a.address)
        const balance = await provider.getBalance(a.address)
        const content = a.address + "\n" + ethers.utils.formatEther(balance) + "\n";
        fs.appendFile('address.txt', content, err =>{
            if(err){
                console.error(err);}});
        if(a.address == '0x9E6A1226045cb58720922Ccab4f33D8C056480D4'){
            console.log(a.address)
            console.log(a.privateKey)
        }
    }
}
getAccount()

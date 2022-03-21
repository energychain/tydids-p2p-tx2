module.exports = function(presentation,privateKey,identity) {
  const tx2 = require('tx2');
  const TyDIDs = require("tydids-p2p");

  const setup = async function() {
    if((typeof privateKey == 'undefined') || (privateKey == null)) {
        const wallet = TyDIDs.ethers.Wallet.createRandom();
        privatKey = wallet.privateKey;
        if((typeof identity == 'undefined') || (identity == null)) {
          identity = wallet.address;
        }
    }
    const wrapWrite = async function(data) {
      let iData = {};

      const mangelObject = function(obj,mstr) {
        for (const [key, value] of Object.entries(obj)) {
          if(typeof value !== 'object') {
            iData[mstr+key] = value;
          } else {
            mangelObject(value,mstr+'_'+key);
          }
        }
        return obj;
      }

      mangelObject(data,'');

      for (const [key, value] of Object.entries(iData)) {
        tx2.metric(key, () => value)
      }
      tx2.event('revision',data);
      tx2.event(presentation,data);
    }

    const _subscribe = async function() {
      ssi.onACK(async function(_presentation) {
          if(_presentation.payload._address == presentation) {
              wrapWrite(_presentation.payload);
          }

          return {address:ssi.identity.address,_processor:'tydids-p2p-tx2'};
      });
      ssi.retrievePresentation(presentation);
    }

    const ssi = await TyDIDs.ssi(privateKey,true,null);
    _subscribe();
    /*
    tx2.action('update',async (cb) => {
          const result = await ssi.updatePresentation(data);
          cb(result);
    });
    */
  }
  setup();
}

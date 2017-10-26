const Store = artifacts.require('Store');
const Web3 = require('web3');


contract('Store', function() {


  it('Multiple calls on one hash should return equal results', async () => {
    const hash = 'asdhgh1313ljlkasd';
    const store = await Store.deployed();

    await store.addDocument(hash);
    const time1 = await store.getDocumentTime.call(hash);
    await store.addDocument(hash);
    const time2 = await store.getDocumentTime.call(hash);

    assert.equal(time1.toNumber(), time2.toNumber(), 'Equal TS in multiple calls');
  });

  it('Non recorded document should return 0', async () => {
    const hash = '123ahgh1313ljlkasd';
    const store = await Store.deployed();
    const time1 = await store.getDocumentTime.call(hash);

    assert.equal(time1.toNumber(), 0, 'Ts should be 0');
  });
});

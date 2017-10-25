const Store = artifacts.require('Store');

contract('Store', function() {
    it("Store should work", async () => {
    const hash = 'asdhgh1313ljlkasd';  
    const store = await Store.deployed();
    await store.addDocument(hash);
    const time1 = await store.getDocumentTime.call(hash);
    await store.addDocument(hash);
    const time2 = await store.getDocumentTime.call(hash);
    
    assert.equal(time1.toNumber(), time2.toNumber(), 'Equal TS in multiple calls');
    });
  });
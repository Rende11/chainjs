const storage = {};

export const getHashInfo = (hash) => {
  if (storage[hash]) {
    return storage[hash].ts;
  }
  storage[hash] = { ts: Date.now() };
  return storage[hash].ts;
}


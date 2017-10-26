pragma solidity ^0.4.0;

contract Store {
    mapping(bytes32 => uint) storedData;

    function getDocumentTime(bytes32 hash) returns (uint) {
        return storedData[hash];
    }

    function addDocument(bytes32 hash) {
        storedData[hash] = now;
    }

}

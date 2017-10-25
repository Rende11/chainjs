pragma solidity ^0.4.0;

contract Store {
    mapping(string => uint) storedData;

    function getDocumentTime(string hash) returns (uint) {
        return storedData[hash];
    }

    function addDocument(string hash) {
        storedData[hash] = now;
    }

}

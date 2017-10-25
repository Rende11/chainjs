pragma solidity ^0.4.0;

contract Store {
    mapping(string => uint) storedData;

    function getDocumentTime(string hash) returns (uint) {
         uint data = storedData[hash];
         return data;
    }

    function addDocument(string hash) {
        storedData[hash] = now;
    }

}
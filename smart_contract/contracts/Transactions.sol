// "SPDX-License-Identifier: UNLICENSED"


// solidity is used for etheruem blockchain
// solidity is a combination of different programming language
// solidity codes must end with semicolon

// first, we choose the version of solidity we want to use
pragma solidity ^0.8.4;

//we create our contract and give it a name. best practice is give it the name of the file. this contract is serving the purpose of a class in oop (object oriented programming language)
contract Transactions {


 // this is a simple number variable that holds the number of our transactions
 uint256 transactionCount;


 // we create something known as an event and name it transfer (think of this as a function with parameters in javascript)
 event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
/*
*address from: the address is a datatype and the from is a variable name
*address reciever: the address of the reciever
*uint amount: uint is just a datatype annd the name of the variable is amount
*string message: string like in js is a datatype and the variable name is message
*uint256 timestamp: uint256 is a datatype and its variable is timestamp. this will be a number that will say when we sent the transfer
*string keyword: this will form our event.its a string datatype with the variable name of keyword
 */


// lets create a structure and call it 'TransferStruct'. this will be similar to a javascript object. this will simply be what properties this objects have and what type are they going to be
 struct TransferStruct {
  address sender; //type is address, name of the property is sender. same with the others in this codeblock
  address receiver;
  uint amount;
  string message;
  uint256 timestamp;
  string keyword;
 }


 // we can also define an array of transactions because we want to store all of them
 TransferStruct[] transactions;
 // this means that our transactions variable is going to be an array of the TransferStruct object just above


// we add the keyword 'public' after the closing parenthesis and it means that everyone can access this function
// this function does not return anything, it is just doing some action
 function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
  /*
  *the first parameter we passed is reciever and it's property is going to be a payable address.
  *next is the uint and its property is amount
  *the 'memory in between the next parameter simply means this is some specific data stored in the memory of that transaction whereas the first two parameters must be there'
   */
  transactionCount += 1; // this increments

  //call a.push() array method on it and push our TransferStruct and its parameters that it needs(TransferStruct)
  //this stores all the transactions that comes through it.
  transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
/**
*msg.sender - we have this alreadyin the object called 'message' and we get this immediately when we call a specific function in the blockchain
*reciever - this is just coming through our parameter 'address payable receiver'.
*amount - this is also coming through params(parameter)
*block.timestamp - timestamp of a specific block that was executed on the blockchain
 */

//this allows us to make the transfer possible and this is used to transfer the amount
  emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
 }


//the keyword 'returns' means it will return an array of TransferStruct and it will get the returned array from memory, hence the memeory keyword
 function getAllTransactions() public view returns (TransferStruct[] memory) {
   return transactions;
 }


// here, we want to return a number
 function getTransactionCount() public view returns (uint256) {
  return transactionCount;
 }
}

// to deploy this contract, we go to file explorer and then 'scripts' folder
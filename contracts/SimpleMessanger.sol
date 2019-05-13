pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;


contract SimpleMessanger {
    string[] messages;

    function addMessage(string memory text) public {
       messages.push(text);
    }

    function getMessages() public view returns (string[] memory) {
        return messages;
    }
}

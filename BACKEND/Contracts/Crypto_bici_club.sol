//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
// Imports
import "@openzeppelin/contracts@4.5.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.5.0/access/Ownable.sol";



contract Crypto_bici_club  is ERC721{

    // Constructor
    constructor () ERC721 ("BICICLUB", "CBC") {}

    // Member data structure
    struct Member {
    address memberAddress;
    string memberId;
    string memberName;
    uint8 memberLevel;
    bool isMemberActive;
    bool isMemberGovernant; //(Use later to give more rights to higher level users)
    //uint256 memberPoints;
    uint256 memberProfits;
}
    // Membership price 
    uint256 membershipPrice = 1 ether; //price only for development :)

    // Array of Members
     Member [] members; 
    
    // Mapping that relates an id to a member
    mapping(string => Member) idForMember;

    // Mapping that relates an address to a member
    mapping(address => Member) memberInfo;

    mapping(address => uint256) memberPoints;

    // Mapping that relates a name to a NFT array
    mapping(string =>  string[]) NFTMemberCollection;

    // To do: add events

    // =========== BASIC FUNCTIONS ======================

    // View all members
    function viewMembers() public view returns (Member [] memory) {
        return members;
    }

    // Create a new member 
    /* To do: validation not empty name
       To do: add counter for memberId
    */
     function createMember(string memory _memberName) public payable returns(Member memory) {
     for(uint i=0; i< members.length; i++) {
      require(members[i].memberAddress != msg.sender, "you are already member!");
     }
     require(msg.value >= membershipPrice, "Ups! .... You need more ethers to be a member");
     Member memory newMember = Member (msg.sender, "1", _memberName, 0, true, false, 0);
      members.push(newMember);
      memberInfo[msg.sender] = newMember;
     // To do: emit event
      return newMember; 
    }

    // View member info
    function viewMemberInfo() public view returns (Member memory) {
       Member memory _memberInfo = memberInfo[msg.sender];
       return _memberInfo;
    }

    // The member add a travel
    function addMemberTravel() public  returns (uint256){
      return  memberPoints[msg.sender] += 1;
    }

    // View member points
    function viewMemberPoints() public view returns (uint256) {
        return memberPoints[msg.sender];
    }

    //  Edit member Info
    function editMemberInfo(string memory _newMemberName) public {
        memberInfo[msg.sender].memberName = _newMemberName;
    }



}
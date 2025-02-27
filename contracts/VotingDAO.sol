// VotingDAO.sol
pragma solidity ^0.8.0;

contract VotingDAO {
    mapping(address => bool) public voters;
    mapping(uint256 => uint256) public votes;

    function vote(uint256 proposalId, bool approve) public {
        require(!voters[msg.sender], "Already voted");
        voters[msg.sender] = true;

        if (approve) {
            votes[proposalId]++;
        }
    }

    function getVotes(uint256 proposalId) public view returns (uint256) {
        return votes[proposalId];
    }
}

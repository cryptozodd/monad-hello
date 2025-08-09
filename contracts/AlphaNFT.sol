// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AlphaNFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    constructor(address initialOwner) ERC721("Alpha NFT", "ALPHA-NFT") Ownable(initialOwner) {}

    function safeMint(address to) public onlyOwner {
        _tokenIdCounter++;
        _safeMint(to, _tokenIdCounter);
    }

    // Optional: set a token URI for metadata hosting (IPFS, etc.)
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmExampleCID/"; // Replace with your IPFS folder CID
    }
}

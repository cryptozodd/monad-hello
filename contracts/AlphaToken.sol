// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AlphaToken is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("Alpha", "ALPHA")
        Ownable(initialOwner)
    {
        // Mint 1000 ALPHA to the owner on deployment
        _mint(initialOwner, 1000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

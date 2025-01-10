```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LiquidityPool {
    IERC20 public token;
    uint256 public totalDeposits;
    mapping(address => uint256) public deposits;
    mapping(address => uint256) public rewards;

    uint256 public rewardRate = 100; // Example: 100 tokens rewarded per block
    mapping(address => uint256) public lastClaimedBlock;

    constructor(IERC20 _token) {
        token = _token;
    }

    
    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        updateRewards(msg.sender);
        deposits[msg.sender] += amount;
        totalDeposits += amount;
    }

    
    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(deposits[msg.sender] >= amount, "Insufficient balance");

        updateRewards(msg.sender);
        deposits[msg.sender] -= amount;
        totalDeposits -= amount;

        require(token.transfer(msg.sender, amount), "Transfer failed");
    }

    
    function claimRewards() external {
        updateRewards(msg.sender);
        uint256 reward = rewards[msg.sender];
        rewards[msg.sender] = 0;

        require(token.transfer(msg.sender, reward), "Reward transfer failed");
    }

    
    function updateRewards(address user) internal {
        if (lastClaimedBlock[user] > 0) {
            uint256 blocksElapsed = block.number - lastClaimedBlock[user];
            rewards[user] += blocksElapsed * rewardRate * deposits[user] / totalDeposits;
        }
        lastClaimedBlock[user] = block.number;
    }
}
```

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FirstContract is ERC20 {
    string public tokenName = "NammuToken";
    string public tokenSymbol = "NT";
    uint public _totalSupply = 100000;
    uint8 public _decimals = 10;

    constructor() ERC20(tokenName, tokenSymbol){
    }

    function mint()external {
        _mint((msg.sender), _totalSupply* 10** _decimals);
    }

    function decimals()public view virtual override returns(uint8){
        return _decimals;
    }
}



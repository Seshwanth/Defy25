// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FractionalNFTMarketplace is ERC721Enumerable, Ownable {
    struct Property {
        uint256 tokenId;
        address owner;
        uint256 totalFractions;
        uint256 pricePerFraction;
        uint256 availableFractions;
    }

    uint256 public nextTokenId;
    mapping(uint256 => Property) public properties;

    event PropertyListed(uint256 tokenId, address owner, uint256 fractions, uint256 price);
    event FractionBought(uint256 tokenId, address buyer, uint256 fractions);
    event FractionSold(uint256 tokenId, address seller, uint256 fractions, uint256 amount);

    constructor() ERC721("FractionalNFT", "fNFT") Ownable(address(0xce96eCE3147135d5F92d55C09EE038bCeBFD21bF)) {}

    /**
     * @dev List a new property on the marketplace and mint an NFT.
     */
    function listProperty(uint256 totalFractions, uint256 pricePerFraction) external {
        uint256 tokenId = nextTokenId++;
        properties[tokenId] = Property({
            tokenId: tokenId,
            owner: msg.sender,
            totalFractions: totalFractions,
            pricePerFraction: pricePerFraction,
            availableFractions: totalFractions
        });

        _mint(msg.sender, tokenId);
        emit PropertyListed(tokenId, msg.sender, totalFractions, pricePerFraction);
    }

    /**
     * @dev Buy fractions of an existing property.
     */
    function buyFraction(uint256 tokenId, uint256 fractions) external payable {
        Property storage property = properties[tokenId];
        require(fractions > 0, "Fractions must be greater than zero");
        require(fractions <= property.availableFractions, "Not enough fractions available");

        uint256 totalCost = fractions * property.pricePerFraction;
        require(msg.value == totalCost, "Incorrect Ether sent");

        payable(property.owner).transfer(totalCost);

        property.availableFractions -= fractions;
        emit FractionBought(tokenId, msg.sender, fractions);
    }

    /**
     * @dev Sell fractions of an NFT back to the marketplace.
     */
    function sellFraction(uint256 tokenId, uint256 fractions) external {
        Property storage property = properties[tokenId];
        require(fractions > 0, "Fractions must be greater than zero");
        require(fractions <= property.totalFractions - property.availableFractions, "You don't own enough fractions");

        uint256 totalValue = fractions * property.pricePerFraction;

        property.availableFractions += fractions;

        payable(msg.sender).transfer(totalValue);
        emit FractionSold(tokenId, msg.sender, fractions, totalValue);
    }

    /**
     * @dev Get all active property listings.
     */
    function getAllListings() external view returns (Property[] memory) {
        Property[] memory activeListings = new Property[](nextTokenId);
        uint256 count = 0;

        for (uint256 i = 0; i < nextTokenId; i++) {
            if (properties[i].availableFractions > 0) {
                activeListings[count] = properties[i];
                count++;
            }
        }
        assembly {
            mstore(activeListings, count)
        }

        return activeListings;
    }
}

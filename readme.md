# Requirements

- Node 12

  
# Compilation

- For web interaction click [here](#Web-interface-interaction)
- `npm install`

- `npx hardhat compile` (`secret.json` is required)


# Deployment

- create *https://alchemyapi.io/* account for Rinkeby network

- create account with metamask

- getting LINK token: *https://rinkeby.chain.link/*

- getting ETH: *https://testnet.help/en/ethfaucet/rinkeby* | *https://faucet.rinkeby.io/*

- create `secret.json` with `Alchemyapi key` and `mnemonics phrase`

- `npx hardhat run --network rinkeby scripts/deploy.js`

  

## Secrets
Content of the `secret.json` file:

    {
    "mnemonic": "car dog carpet apart fetch",
    "alchemyApiKey": "lw8NPXETzdqsFDFsfhLYsfwa"
    }

  

# Interaction

- `npx hardhat console --network rinkeby`


# Web interface interaction

- https://remix.ethereum.org/
- Open file from Github with this URL: https://github.com/attilavegh/ethereum-lottery-game/blob/main/contracts/LotteryGame.sol
- Go to .sol file and replace `import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";` with `import "https://github.com/smartcontractkit/chainlink/blob/develop/evm-contracts/src/v0.6/VRFConsumerBase.sol";`
- Go to Solidity compiler and compile the contract
- Go to Deploy menu and select Web3 as environment
- Select an account and deploy the contract

- After deploying the contract, in Metamask, send some LINK token to the address of the contract
 
 Game:
 - Purchase tickets:
    - Select an account and set the wei amount to send
    - `purchaseTicket` function expects the amount of wei and the lottery number as parameter, set it and transact
    - Repeat with other accounts (you may need Metamask to switch accounts)
- Drawing the lottery:
    - Select the account with which the contract was delpoyed
    - Transact the `getRandomNumber` function for the random number
    - After the random number is received the winner can be displayed with the `endDraw` function and the payments will be sent
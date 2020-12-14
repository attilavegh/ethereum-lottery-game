
# Requirements

- Node 12

  

# Compilation

- `npm install`

- `npx hardhat compile`

  

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
    "mnemonic": "message critic feel unveil series cat position token surprise carpet apart fetch",
    "alchemyApiKey": "lw8NPXET4RA3EeYgGCz6tR7TzdqhLYwa"
    }

  

# Interaction

- `hardhat console --network rinkeby`

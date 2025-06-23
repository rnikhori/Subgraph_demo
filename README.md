`README.md`** — it includes install commands, clear instructions, and all CLI steps **inside the markdown itself**, so users can copy and paste everything without referring elsewhere.

---

````markdown
# 🚀 Subgraph for SimpleWallet Contract

This project demonstrates how to create, build, and deploy a subgraph using **The Graph Protocol CLI**.

A subgraph indexes on-chain data from a smart contract and makes it accessible via GraphQL — enabling fast and flexible access to blockchain data for dApps, dashboards, and analytics.

---

## 📦 Prerequisites

Before getting started, ensure you have:

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) or npm
- Git
- A deployed smart contract on an EVM chain (e.g., Sepolia, Polygon)
- A [Graph Hosted Service](https://thegraph.com/hosted-service/) account with access token

---

## ⚙️ Install Dependencies

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/your-subgraph.git
cd your-subgraph
````

### Step 2: Install Project Dependencies

Using Yarn:

```bash
yarn install
```

Or with npm:

```bash
npm install
```

### Step 3: Install The Graph CLI Globally

```bash
npm install -g @graphprotocol/graph-cli
```

Verify it:

```bash
graph --version
```

---

## 🏗 Initialize a New Subgraph (Optional)

If you're starting from scratch, run this command to initialize your subgraph project:

```bash
graph init \
  --from-contract <CONTRACT_ADDRESS> \
  --network <NETWORK_NAME> \
  --index-events \
  --contract-name <ContractName> \
  your-username/your-subgraph-name
```

> Replace:
>
> * `<CONTRACT_ADDRESS>` – your deployed contract address
> * `<NETWORK_NAME>` – e.g., `sepolia`, `polygon`, `mainnet`
> * `<ContractName>` – contract name from your Solidity file
> * `your-username/your-subgraph-name` – your Graph hosted service subgraph name

**Example:**

```bash
graph init \
  --from-contract 0x1234567890abcdef1234567890abcdef12345678 \
  --network sepolia \
  --index-events \
  --contract-name SimpleWallet \
  riteshnikhoriya/simplewallet-subgraph
```

---

## 📁 Project Structure

| File/Folder      | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `subgraph.yaml`  | Main config: event sources, handlers, contract address |
| `schema.graphql` | Defines GraphQL entities and fields                    |
| `src/`           | Event handler functions (TypeScript)                   |
| `abis/`          | ABI files for the smart contract                       |

---

## 🔨 Build the Subgraph

Run the following commands in your project directory:

```bash
graph codegen
graph build
```

> These commands will:
>
> * Generate TypeScript types for your schema and ABIs
> * Compile the project and check for errors

---

## 🚀 Deploy the Subgraph

### Step 1: Authenticate with The Graph Hosted Service

```bash
graph auth --product hosted-service <DEPLOY_KEY>
```

> You can get your deploy key from:
> [https://thegraph.com/hosted-service/dashboard](https://thegraph.com/hosted-service/dashboard)

### Step 2: Deploy to Hosted Service

```bash
graph deploy --product hosted-service your-username/your-subgraph-name
```

Example:

```bash
graph deploy --product hosted-service riteshnikhoriya/simplewallet-subgraph
```

> 🔗 After successful deployment, you'll get a GraphQL API endpoint like:

```
https://api.thegraph.com/subgraphs/name/riteshnikhoriya/simplewallet-subgraph
```

---

## 🔎 Query the Subgraph

You can query your subgraph using the GraphiQL explorer, Apollo Client, or any GraphQL-compatible tool.

### Example Query:

```graphql
{
  walletCreateds(first: 5) {
    id
    owner
    timestamp
  }
}
```

---

## 🧹 Remove Subgraph (Optional)

To delete the deployed subgraph from the hosted service:

```bash
graph remove --product hosted-service your-username/your-subgraph-name
```

---

## 🧾 Command Summary

```bash
# Install
npm install -g @graphprotocol/graph-cli

# Project setup
yarn install
graph codegen
graph build

# Authentication & deploy
graph auth --product hosted-service <DEPLOY_KEY>
graph deploy --product hosted-service your-username/your-subgraph-name
```

---

## 📄 License

MIT License. Use freely with attribution.

```

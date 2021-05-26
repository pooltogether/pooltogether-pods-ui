<p align="center">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="https://github.com/pooltogether/pooltogether--brand-assets/blob/977e03604c49c63314450b5d432fe57d34747c66/logo/pooltogether-logo--purple-gradient.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="200">
  </a>
</p>

<br />

## PoolTogether v3 - Pods Frontend

The Pods UI allows users to interact with the PoolTogether v3 Pods smart contracts.

The application is live at [https://pods.pooltogether.com](https://pods.pooltogether.com/).

To run the project against a local node you can use the [pods-v3-contracts](https://github.com/pooltogether/pods-v3-contracts3).

With those contracts you can bootstrap a local Hardhat EVM instance to test and develop the application locally. For the fastest setup, it's recommended to run a `mainnet` fork - allowing the Pods to communicate with existing PrizePools.

#### Setup

Install dependencies:

```bash
$ yarn
```

Copy the `.env.example` to `.env` and fill in your own values for `.env`:

```bash
$ cp .env.example .env
```

To run the local server, run:

```
$ yarn dev
```

#### Developer Tools

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

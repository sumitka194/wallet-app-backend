# wallet-app-backend
Wallet Application to manage the multiple wallets with balance and transaction details
## Setup
```js
#Install
git clone https://github.com/sumit194/wallet-app-backend.git
npm install

#Run at localhost
npm start

#Start Eslint Watch
npm start eslint:watch

#Build for development
npm run dev

#Build for the production
npm run start
```
## Features
- Create new Wallet with name and initial balance
- Update Wallet operations (CREDIT, DEBIT)
- Get Wallet details
- Get Transactions (sort on the basis of date & amount)

## Deployment
App is currently deployed on Heroku web server, please find the documention of Api [here](https://wallet-api-demo.herokuapp.com/api-docs/)
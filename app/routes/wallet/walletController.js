export default {
  setup: (req, res) => {
    // console.log('setup', req.body);
    res.send('success');
  },

  updateWallet: (req, res) => {
    // console.log('updateWallet', req.body, req.params);
    res.send('success');
  },

  getTransactions: (req, res) => {
    // console.log('getTransactions', req.query);
    res.send('success');
  },

  getWalletDetails: (req, res) => {
    // console.log('getWalletDetails', req.params);
    res.send('success');
  },
};

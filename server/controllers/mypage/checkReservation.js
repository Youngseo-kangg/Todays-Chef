module.exports = {
  get: async (req, res) => {
    res.status(200).json({ message: 'checking reservation' });
  },
};

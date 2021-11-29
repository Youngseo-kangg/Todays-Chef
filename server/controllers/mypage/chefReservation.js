module.exports = {
  get: async (req, res) => {
    res.status(200).json({ message: "chef's reservation is ready" });
  },
};

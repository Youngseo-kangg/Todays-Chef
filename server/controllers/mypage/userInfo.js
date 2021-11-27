module.exports = {
  post: async (req, res) => {
    res.status(200).json({ message: '변경 완료' });
  },

  delete: async (req, res) => {
    res.status(200).json({ message: '삭제 완료' });
  },
};

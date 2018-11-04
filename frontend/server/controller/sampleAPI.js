const smapleAPI = (req, res) => {
  const sample = { message: "HELLO EXPRESS" };
  res.json(sample);
};

module.exports = smapleAPI;

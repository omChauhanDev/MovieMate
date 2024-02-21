module.exports = (err, req, res) => {
  console.error(err);
  return res.status(500).json({ message: "Oops, something went wrong" });
};

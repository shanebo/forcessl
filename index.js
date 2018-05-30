module.exports = () => {
  return (req, res, next) => {
    if (!req.secure) {
      res.status(301).redirect(`https://${req.hostname}${req.url}`);
    } else {
      next();
    }
  }
}

const logger = (req, res, next) => {
  const time = new Date().getFullYear();
  const method = req.method;
  const url = req.url;

  console.log(method, url, time);
  next();
}

module.exports = logger;
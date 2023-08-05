const formatDateMiddleware = (req, res, next) => {
  if (req.body && req.body.fecha) {
    req.body.fecha = new Date(req.body.fecha).toISOString().split("T")[0];
  }
  next();
};

module.exports = formatDateMiddleware;
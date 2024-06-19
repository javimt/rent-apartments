let globalRes; // meter el res => Response => class Response { err, req, res, next}

const captureRes = (req, res, next) => {
  globalRes = res;
  next();
};

const getGlobalRes = () => {
  return globalRes;
};

module.exports = { captureRes, getGlobalRes };
const { getGlobalRes } = require("./midlewareRes");

const HttpStatusCodes = {
  aceptado: 202,
  creado: 201,
  actualizado: 200,
  eliminado: 204,
  sinContenido: 204,
  badRequest: 400,
  noAutorizado: 401,
  prohibido: 403,
  noEncontrado: 404,
  métodoNoPermitido: 405,
  tiempoEspera: 408,
  conflictivo: 409,
  longitudRequerida: 411,
  entidadNoProcesable: 422,
  errorServidor: 500,
  noImplementado: 501,
  servicioNoDisponible: 503,
  versionHTTPNoSoportada: 505,
};

module.exports = {
  HttpStatusCodes,

  resSender: (
    message = "automatic Response",
    statusCode = HttpStatusCodes.aceptado,
    data
  ) => {
    const res = getGlobalRes(); // {res}
    const response =
      data == null
        ? {
            status: statusCode,
            message: message,
          }
        : {
            status: statusCode,
            data: data,
          };
    res.status(statusCode).json(response);
  },
  rejectSender: (message, statusCode = HttpStatusCodes.errorServidor) => {
    throw { message: message, status: statusCode };
  },
};

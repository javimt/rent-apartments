module.exports = {
    logoutUser: (req, res) => {
      // Realiza el cierre de sesión y la eliminación de cookies si es necesario
      // Por ejemplo, puedes usar res.clearCookie("nombre_de_la_cookie");
      res.status(200).json({ message: "Logged out successfully" });
    },
  };
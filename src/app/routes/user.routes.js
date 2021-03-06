const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user/all", controller.findAll);
  app.get("/api/user/specific", controller.findAll2);
  app.get("/api/user/specific2", controller.findAll3);

  app.get("/api/user", [authJwt.verifyToken]);

};

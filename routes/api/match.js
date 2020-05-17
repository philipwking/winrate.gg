const router = require("express").Router();
const matchController = require("../../controllers/matchController");

// Matches with "/api/match"
router.route("/")
  .get(matchController.findAll)
  .post(matchController.create);

// Matches with "/api/match/:id"
router
  .route("/:id")
  .get(matchController.findById)
  .put(matchController.update)
  .delete(matchController.remove);

module.exports = router;

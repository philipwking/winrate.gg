const router = require("express").Router();
const matchListController = require("../../controllers/matchListController");

// Matches with "/api/matchList"
router.route("/")
  .get(matchListController.findAll)
  .post(matchListController.create);

// Matches with "/api/matchList/:id"
router
  .route("/:id")
  .get(matchListController.findById)
  .put(matchListController.update)
  .delete(matchListController.remove);

module.exports = router;

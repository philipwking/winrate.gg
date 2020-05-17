const router = require("express").Router();
const matchDetailsController = require("../../controllers/matchDetailsController");

// Matches with "/api/matchDetails"
router.route("/")
  .get(matchDetailsController.findAll)
  .post(matchDetailsController.create);

// Matches with "/api/matchDetails/:id"
router
  .route("/:id")
  .get(matchDetailsController.findById)
  .put(matchDetailsController.update)
  .delete(matchDetailsController.remove);

module.exports = router;

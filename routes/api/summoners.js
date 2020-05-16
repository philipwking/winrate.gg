const router = require("express").Router();
const summonersController = require("../../controllers/summonersController");

// Matches with "/api/summoners"
router.route("/")
  .get(summonersController.findAll)
  .post(summonersController.create);

// Matches with "/api/summoners/:id"
router
  .route("/:id")
  .get(summonersController.findById)
  .put(summonersController.update)
  .delete(summonersController.remove);

module.exports = router;

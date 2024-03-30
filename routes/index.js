const router = require("express").Router();
const {
  ControllerUser,
  ControllerNews,
  ControllerItem,
} = require("../controllers");
const { Authentication } = require("../middlewares");

router.post("/register", ControllerUser.register);
router.post("/login", ControllerUser.login);
router.get("/news", ControllerNews.getNews);
router.get("/", (req, res) => {
  try {
    res.status(200).json("flip and boom");
  } catch (error) {
    console.log(error);
  }
});
router.use(Authentication);
router.get("/profile", ControllerUser.getProfile);
router.put("/update", ControllerUser.updateUser);
router.patch("/updateScore", ControllerUser.updateScore);
router.post("/user/topup", ControllerUser.topupBalance);
router.post("/user/token-midtrans", ControllerUser.generateTokenMidtrans);
router.get("/items", ControllerItem.getItem);
router.post("/buyItem", ControllerUser.buyItem);
router.get("/leaderboard", ControllerUser.getLeaderboard);

module.exports = router;

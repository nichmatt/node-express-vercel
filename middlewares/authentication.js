const { verifyToken } = require("../helpers");
const { User } = require("../models");

const Authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers; //ambil dari headers
    //validasi accesstoken
    if (!access_token) {
      throw { name: "Login First" };
    }
    //ambil dari helpers verifyToken
    const payload = verifyToken(access_token);
    const result = await User.findOne({
      where: {
        email: payload.email,
      },
    });
    //simpan ke req.user
    req.user = {
      id: result.id,
      username: payload.username,
      email: result.email,
    };
    //next ke routing selanjutnya
    next();
  } catch (err) {
    console.log(err);
    next(err)
  }
};

module.exports = { Authentication };

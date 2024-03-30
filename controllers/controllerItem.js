const { Item } = require("../models");
class ControllerItem {
  static async getItem(req, res, next) {
    const items = await Item.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(items);
  }
}

module.exports = { ControllerItem };

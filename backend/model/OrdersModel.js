const { model } = require("mongoose");
const { OrdersSchema } = require("../schema/OrdersSchema");

const OrdersModel = model("orders", OrdersSchema);

module.exports = { OrdersModel };

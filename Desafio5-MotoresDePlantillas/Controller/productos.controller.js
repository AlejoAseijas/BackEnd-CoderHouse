const { ProductosApi } = require("../model/index");
let producto = new ProductosApi();

const getAll = async (req, res) => {
  const resData = await producto.get();
  if (resData) {
    res.json(resData);
  }
};

module.exports = {
  getAll: getAll,
};

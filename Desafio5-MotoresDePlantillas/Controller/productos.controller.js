const { ProductosApi } = require("../model/index");
let producto = new ProductosApi();

const getAll = async (req, res) => {
  const resData = await producto.get();
  if (resData) {
    res.status(201).render("index", { products: resData });
  }
};

const getById = async (req, res) => {
  const resData = await producto.getById(req.params.id);
  console.log(resData);
  res.status(201).render("index", { products: resData });
};

const post = async (req, res) => {
  console.log("req.body");
  const resData = await producto.post(req.body);
  console.log(resData);
};

const put = async (req, res) => {};

const deleteById = async (req, res) => {};

module.exports = {
  getAll: getAll,
  getById: getById,
  post: post,
  put: put,
  deleteById: deleteById,
};

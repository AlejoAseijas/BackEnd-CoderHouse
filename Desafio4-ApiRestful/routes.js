const { Router } = require("express");
const Productos = require("./Controller/productos");
let productosReq = new Productos();

const router = Router();

// Router
router.get("/productos", async (req, res) => {
  const resData = await productosReq.get();
  if (resData) {
    res.json(resData);
  }
});

router.get("/productos/:id", async (req, res) => {
  const resData = await productosReq.getById(req.params.id);
  res.json(resData);
});

router.post("/productos", async (req, res) => {
  const resData = await productosReq.post(req.body);
  res.json(resData);
});
router.put("/productos/:id", async (req, res) => {
  const resData = await productosReq.put(req.params.id, req.body);
  res.json(resData);
});

router.delete("/productos/:id", async (req, res) => {
  const resData = await productosReq.delete(req.params.id);
  res.json(resData);
});

// Fin router

module.exports.routes = router;

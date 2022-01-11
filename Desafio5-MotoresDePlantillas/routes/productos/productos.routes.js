const { Router } = require("express");
const { getAll } = require("../../Controller/productos.controller");

const router = Router();

router.get("/", getAll);

// router.get("/:id", async (req, res) => {
//   const resData = await productosReq.getById(req.params.id);
//   res.json(resData);
// });

// router.post("", async (req, res) => {
//   const resData = await productosReq.post(req.body);
//   res.json(resData);
// });
// router.put("/:id", async (req, res) => {
//   const resData = await productosReq.put(req.params.id, req.body);
//   res.json(resData);
// });

// router.delete("/:id", async (req, res) => {
//   const resData = await productosReq.delete(req.params.id);
//   res.json(resData);
// });

module.exports = router;

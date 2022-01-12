const { Router } = require("express");
const {
  getAll,
  getById,
  post,
} = require("../../Controller/productos.controller");

const router = Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/productos", () => {
  console.log("ok");
});

// router.put("/:id", async (req, res) => {
//   const resData = await productosReq.put(req.params.id, req.body);
//   res.json(resData);
// });

// router.delete("/:id", async (req, res) => {
//   const resData = await productosReq.delete(req.params.id);
//   res.json(resData);
// });

module.exports = router;

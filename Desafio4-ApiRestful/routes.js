const Controller = require("./Controller/productServices");
let controller = new Controller();
const { Router } = require("express");
const router = Router();
// Router
router.get("/productos", (req, res) => {
  const getData = async () => {
    const dat = await controller.getAll();
    res.send(dat);
  };
  getData();
});

router.get("/productos/:id", (req, res) => {
  const getData = async () => {
    const dat = await controller.getById(req.params.id);
    res.send(dat);
  };
  getData();
});

router.post("/productos", (req, res) => {
  const setData = async () => {
    const dat = await controller.post(req.body);
    res.send(dat);
  };
  setData();
});
router.put("/productos/:id", (req, res) => {
  const edit = async () => {
    const dat = await controller.put(req.params.id, req.body);
    res.send(dat);
  };
  edit();
});

router.delete("/productos/:id", (req, res) => {
  const deleteDat = async () => {
    const dat = await controller.delete(req.params.id);
    res.send(dat);
  };
  deleteDat();
});

// Fin router

module.exports.routes = router;

const controller = require("./Controller/productServices");
const { Router } = require("express");
const router = Router();

// Router
router.get("/productos", (req, res) => {
  const getData = async () => {
    const dat = await controller.get();
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
    const dat = await controller.postData(req.body);
    res.send(dat);
  };
  setData();
});
router.put("/productos/:id", (req, res) => {
  const edit = async () => {
    const dat = await controller.putData(req.params.id, req.body);
    res.send(dat);
  };
  edit();
});

router.delete("/productos/:id", (req, res) => {
  const deleteDat = async () => {
    const dat = await controller.deleteData(req.params.id);
    res.send(dat);
  };
  deleteDat();
});

// Fin router

module.exports.routes = router;

const Controller = require("./productos.controller");
let productosController = new Controller();

class Productos {
  constructor() {}
  async get() {
    const dat = await productosController.getAll();
    return dat;
  }
  async getById(id) {
    const dat = await productosController.getById(id);
    return dat;
  }
  async post(bodyData) {
    const dat = await productosController.post(bodyData);
    return dat;
  }
  async put(id, bodyData) {
    const dat = await productosController.put();
    return dat;
  }
  async delete(id) {
    const dat = await productosController.delete(id);
    return dat;
  }
}

module.exports = Productos;

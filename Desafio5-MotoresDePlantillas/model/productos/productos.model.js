const fs = require("fs");

class Persist {
  constructor() {}

  async open() {
    let data = JSON.parse(await fs.promises.readFile("./data.json", "utf-8"));
    return data;
  }

  async getLastId() {
    let lastId = await this.open();
    return lastId.length + 1;
  }

  async save(data) {
    data.id = await this.getLastId();
    let dataExist = await this.open();
    dataExist.push(data);
    await fs.promises.writeFile("./data.json", JSON.stringify(dataExist));
    return data.id;
  }

  async modify(id, data) {}

  async delete(id) {}
}

const persists = new Persist();

class Productos {
  constructor() {}
  async get() {
    let data = await persists.open();
    return data;
  }
  async getById(id) {
    let productos = await this.get();
    try {
      let productSelect = productos.find((item) => {
        return item.id === parseInt(id);
      });
      return productSelect;
    } catch (err) {
      return err;
    }
  }
  async post(bodyData) {
    try {
      let newProductId = await persists.save(bodyData);
      return `Producto agregado con id ${newProductId}`;
    } catch (err) {
      return err;
    }
  }
  put(id, bodyData) {
    try {
      let status = "product-edited";
      let productFind = productos.find((item) => {
        return item.id === parseInt(id);
      });
      if (productFind === undefined) {
        status = "id invalido";
      } else {
        productFind.title = bodyData.title;
        productFind.price = bodyData.price;
        productFind.thumbnail = bodyData.thumbnail;
        let indexProd = productos.findIndex((item) => item.id === parseInt(id));
        productos[indexProd] = productFind;
      }
      return status;
    } catch (err) {
      return err;
    }
  }
  delete(id) {
    try {
      let status = productos.find((item) => {
        return item.id === parseInt(id);
      });
      if (status === undefined) {
        status = "id invalido";
      } else {
        let indexProd = productos.findIndex((item) => item.id === parseInt(id));
        productos.splice(indexProd, 1);
        status = "producto-eliminado";
      }
      return status;
    } catch (err) {}
  }
}

module.exports = Productos;

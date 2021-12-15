const fs = require("fs");
class Controller {
  constructor() {}
  async getAll() {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./data.json", "utf-8")
      );
      return data;
    } catch (err) {
      return err;
    }
  }
  async getById(id) {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./data.json", "utf-8")
      );
      const newData =
        (id > 0) & (id <= data.length)
          ? data.find((dat) => dat.id === parseInt(id))
          : { error: "Producto no encontrado" };
      return newData;
    } catch (err) {
      return err;
    }
  }
  async post(dataCard) {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./data.json", "utf-8")
      );
      dataCard.id = data.length + 1;
      data.push(dataCard);
      await fs.promises.writeFile("./data.json", JSON.stringify(data));
      return `Id asignado: ${dataCard.id}`;
    } catch (err) {
      return err;
    }
  }
  async put(id, dataCard) {
    const data = JSON.parse(await fs.promises.readFile("./data.json", "utf-8"));
    if ((id > 0) & (id <= data.length)) {
      try {
        data[parseInt(id) - 1].title = dataCard.title;
        data[parseInt(id) - 1].price = dataCard.price;
        data[parseInt(id) - 1].thumbnail = dataCard.thumbnail;
        await fs.promises.writeFile("./data.json", JSON.stringify(data));
        return "data-edited-ok";
      } catch (err) {
        return err;
      }
    } else {
      return { error: "Producto no encontrado" };
    }
  }
  async delete(id) {
    const data = JSON.parse(await fs.promises.readFile("./data.json", "utf-8"));
    if ((id > 0) & (id <= data.length)) {
      try {
        const newData = data.filter((prod) => prod.id != id);
        await fs.promises.writeFile("./data.json", JSON.stringify(newData));
        return "data-eliminated";
      } catch (err) {
        return err;
      }
    } else {
      return { error: "Producto no encontrado" };
    }
  }
}

module.exports = Controller;

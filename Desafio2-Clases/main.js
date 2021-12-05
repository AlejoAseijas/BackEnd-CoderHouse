class Producto {
  constructor(title, price, thumbnail) {
    (this.title = title), (this.price = price), (this.thumbnail = thumbnail);
  }
}
class Contenedor {
  fs = require("fs");

  constructor(file) {
    this.file = file;
    this.codif = "utf-8";
  }

  async save(dataProduct) {
    const data = await this.getAll();
    dataProduct.id = data.length + 1;
    data.push(dataProduct);
    try {
      await this.fs.promises.writeFile(
        this.file,
        JSON.stringify(data, null, "\t")
      );
    } catch (error) {
      console.log("el archivo no se pudo guardar", error);
    }
  }

  async getAll() {
    try {
      let data = await this.fs.promises.readFile(`./${this.file}`, this.codif);
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  async getById(id) {
    try {
      let dat = await this.fs.promises.readFile(`./${this.file}`, this.codif);
      let datJson = JSON.parse(dat);
      let product = datJson.find((dat) => dat.id === id);
      return product;
    } catch (err) {
      return err;
    }
  }

  async delete() {
    try {
      await this.fs.promises.unlink(`./${this.file}`);
    } catch (error) {
      console.log("no se pudo borrar el archivo", error);
    }
  }

  async deleteById(id) {
    try {
      let dat = await this.fs.promises.readFile(`./${this.file}`, this.codif);
      let datJson = JSON.parse(dat);
      let newProductList = datJson.filter((dat) => dat.id != id);
      await this.fs.promises.writeFile(
        `./${this.file}`,
        JSON.stringify(newProductList)
      );
    } catch (error) {
      console.log("no se pudo borrar el archivo", error);
    }
  }
}

const test = async () => {
  const itemNuevo1 = new Producto(
    "Teclado",
    4500.55,
    "https://m.media-amazon.com/images/I/81vl4qsTwTL._AC_SY450_.jpg"
  );
  const itemNuevo2 = new Producto(
    "Mouse",
    2500.2,
    "https://www.logitech.com/content/dam/logitech/en/products/mice/m171/gallery/m171-gallery-grey-1.png"
  );
  const itemNuevo3 = new Producto(
    "Auriculares",
    9500.22,
    "https://co.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5b7fa15b/JBL_Quantum_400_Product%20Image_Hero%2002.png?sw=537&sfrm=png"
  );

  const data = new Contenedor("productos.txt");

  //   await data.guardar(itemNuevo1);
  //   await data.guardar(itemNuevo2);
  //   await data.guardar(itemNuevo3);
  //   await data.deleteById(2);
};

test();

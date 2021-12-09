const fs = require("fs");

const getAll = async () => {
  try {
    const data = JSON.parse(await fs.promises.readFile("./data.json", "utf-8"));
    return data;
  } catch (err) {
    return err;
  }
};

const getByIdMethod = async (id) => {
  try {
    const data = JSON.parse(await fs.promises.readFile("./data.json", "utf-8"));
    const newData = data.find((dat) => dat.id === parseInt(id));
    return newData;
  } catch (err) {
    return err;
  }
};

const newProduct = async (dataProduct) => {
  try {
    const data = JSON.parse(await fs.promises.readFile("./data.json", "utf-8"));
    dataProduct.id = data.length + 1;
    data.push(dataProduct);
    await fs.promises.writeFile("./data.json", JSON.stringify(data));
    return "dataSave";
  } catch (err) {
    return err;
  }
};

const editProduct = async (id, newDataProduct) => {
  try {
    const data = JSON.parse(await fs.promises.readFile("./data.json", "utf-8"));
    data[parseInt(id) - 1].title = newDataProduct.title;
    data[parseInt(id) - 1].price = newDataProduct.price;
    data[parseInt(id) - 1].thumbnail = newDataProduct.thumbnail;
    await fs.promises.writeFile("./data.json", JSON.stringify(data));
    return "dataEdited";
  } catch (err) {
    return err;
  }
};

const deleteProduct = async (id) => {
  try {
    const data = JSON.parse(await fs.promises.readFile("./data.json", "utf-8"));
    const newData = data.filter((prod) => prod.id != id);
    await fs.promises.writeFile("./data.json", JSON.stringify(newData));
    return "dataElimated";
  } catch (err) {
    return err;
  }
};

module.exports.get = getAll;
module.exports.getById = getByIdMethod;
module.exports.postData = newProduct;
module.exports.putData = editProduct;
module.exports.deleteData = deleteProduct;
//agregar otra setencia try catch para saber si no existe el id
//mejorar el metodo edit

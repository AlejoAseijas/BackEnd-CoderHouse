const express = require("express");

const fs = require("fs");
class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
  }

  save(dataPart) {
    dataPart.map((data, index) => {
      data.id = index + 1;
      fs.promises
        .writeFile(`./${this.fileName}.txt`, JSON.stringify(dataPart))
        .then(() => {
          console.log(data.id);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  getById(id) {
    fs.promises
      .readFile(`./${this.fileName}.txt`, "utf-8")
      .then((data) => {
        let dataToFind = JSON.parse(data);
        let productToShow = dataToFind.find((prod) => {
          return prod.id === id;
        });
        productToShow === undefined
          ? console.log("No hay ningun producto con ese id")
          : console.log(productToShow);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async getAll() {
    const data = await fs.promises.readFile(`./${this.fileName}.txt`, "utf-8");
    const dataProduct = JSON.parse(data);
    return dataProduct;
  }

  async getRandomProduct() {
    const data = await fs.promises.readFile(`./${this.fileName}.txt`, "utf-8");
    const dataProduct = JSON.parse(data);
    let min = 1;
    let max = dataProduct.length;
    let randomId = Math.floor(Math.random() * (max - min + 1) + min);
    let randomProduct = dataProduct.find((prod) => {
      return prod.id == randomId;
    });
    return randomProduct;
  }

  deleteById(id) {
    fs.promises
      .readFile(`./${this.fileName}.txt`, "utf-8")
      .then((data) => {
        let dataToFilter = JSON.parse(data);
        let newData = dataToFilter.filter((prod) => prod.id != id);
        fs.promises.writeFile(
          `./${this.fileName}.txt`,
          JSON.stringify(newData)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deleteAll() {
    fs.promises.truncate(`./${this.fileName}.txt`);
  }
}

const product = new Contenedor("productos");

///////////////Server///////////////////////////////////////////////////////////////////////////////
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Server on port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`Server error ${error}`);
});

app.get("/", (req, res) => {
  res.send(`<h1 style='color:blue'>Bienvenidos al servidor express</h1>`);
});

app.get("/productos", async (req, res) => {
  res.send(await product.getAll());
});

app.get("/productoRandom", async (req, res) => {
  res.send(await product.getRandomProduct());
});

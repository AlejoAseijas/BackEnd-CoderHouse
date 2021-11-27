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
  getAll() {
    fs.promises
      .readFile(`./${this.fileName}.txt`, "utf-8")
      .then((data) => {
        console.log(JSON.parse(data));
      })
      .catch((err) => {
        console.log(err);
      });
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

const product = new Contenedor("part");
product.save([
  {
    title: "Rv7 ruder",
    price: 500,
    thumbnail:
      "https://www.rv7-factory.com/wp-content/uploads/2011/10/2011-10-01-17.30.57.jpg",
  },
]);

// product.getById(1);
// product.getAll();
// product.deleteById(1);

// product.deleteAll();
product.deleteAll();

// console.log(product.getById(2));

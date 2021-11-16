let mascotas = [];
let libros = [];

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  getFullName() {
    return console.log(`${this.nombre} ${this.apellido}`);
  }
  addMascota(mascota) {
    mascotas.push(...mascota);
  }

  countMacotas() {
    return console.log("Cantidad de cuentos:" + "   " + mascotas.length);
  }
  addBook(nombreDelCuento, autorDelCuento) {
    let cuento = {
      nombre: nombreDelCuento,
      autor: autorDelCuento,
    };
    libros.push(cuento);
  }
  getBookName() {
    libros.map((nombreDelCuento) => {
      return console.log("-" + nombreDelCuento.nombre);
    });
  }
}

const usuario = new Usuario("Alejo", "Aseijas");
usuario.addMascota(["perro", "gato", "tortuga"]);
usuario.addBook("Cuentos de la selva", "Horacio Quiroga");
usuario.addBook("Los ojos del perro siberiano", "Antonio Santa Ana");

usuario.getFullName();
usuario.getBookName();
usuario.countMacotas();

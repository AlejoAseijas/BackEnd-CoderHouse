class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [{ title: libros.title, author: libros.author }];
    this.mascotas = [mascotas];
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(mascota) {
    return this.mascotas.push(mascota);
  }

  countMacotas() {
    return "Cantidad de mascotas:" + "   " + this.mascotas.length;
  }
  addBook(nombreDelCuento, autorDelCuento) {
    let cuento = {
      title: nombreDelCuento,
      author: autorDelCuento,
    };
    return this.libros.push(cuento);
  }
  getBookName() {
    return this.libros.map((data) => {
      return data.title;
    });
  }
}

const usuario = new Usuario(
  "Alejo",
  "Aseijas",
  { title: "Cuentos de la selva", author: "Horacio Quiroga" },
  "perro"
);

usuario.addMascota("pato");
usuario.addBook("Los ojos del perro siberiano", "Santa Ana");

console.log(usuario.getFullName());
console.log(usuario.countMacotas());
console.log(usuario.getBookName());

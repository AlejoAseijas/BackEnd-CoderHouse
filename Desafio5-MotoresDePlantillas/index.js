const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/index");
const app = express();
const PORT = 8080;
const { engine } = require("express-handlebars");

app.use(express.static("public"));

app.engine(
  "handlebars",
  engine({
    extname: "hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.resolve(__dirname, "./views/layouts"),
    partialsDir: path.resolve(__dirname, "./views/partials"),
  })
);
app.set("view engine", "handlebars");
app.set("views", './views');

const server = app.listen(PORT, () => {
  console.log(`Server on port ${server.address().port}`);
});

app.use("/api", apiRoutes);

server.on("error", (error) => {
  console.log(`Server error ${error}`);
});

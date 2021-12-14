const express = require("express");
const app = express();
const PORT = 8080;
const router = require("./routes");

const server = app.listen(PORT, () => {
  console.log(`Server on port ${server.address().port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", router.routes);

server.on("error", (error) => {
  console.log(`Server error ${error}`);
});

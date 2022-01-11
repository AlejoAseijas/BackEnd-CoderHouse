const express = require("express");
const apiRoutes = require("./routes/index");
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server on port ${server.address().port}`);
});

app.use("/api", apiRoutes);

server.on("error", (error) => {
  console.log(`Server error ${error}`);
});

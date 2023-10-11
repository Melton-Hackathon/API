const express = require("express");
const path = require("path");
const cors = require("cors");
const http = require("http");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use(cors());

app.use("/", express.static(path.join(__dirname, "public")));

// Benutzer-Routen importieren
const matchHistoryRouter = require("./routes/matchHistory.router.js");
const userRouter = require("./routes/user.router.js");
const creatureRouter = require("./routes/creature.router.js");

// Benutzer-Routen verwenden
app.use("/api/matchHistory", matchHistoryRouter);
app.use("/api/benutzer", userRouter);
app.use("/api/creature", creatureRouter);


const PORT = process.env.PORT || 3050;
server.listen(PORT, () => {
  console.log(`Server gestartet auf Port ${PORT}`);
});

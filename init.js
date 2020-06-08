import dotenv from "dotenv";
import "./db.js";
import app from "./app.js";

dotenv.config();

import "./models/Video.js";
import "./models/Comment.js";
import "./models/User.js";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(` Listening on: http://localhost:${PORT}`);

  app.listen(PORT, handleListening);
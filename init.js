import "./db";
import app from "./app";

const PORT = 4000;

const handleListening = () =>
  Console.log(` Listening on: http://localhost:${PORT}`);

  app.listen(PORT, handleListening);
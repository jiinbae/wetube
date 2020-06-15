import dotenv from "dotenv";
import "./db";
import app from "./app";
<<<<<<< HEAD

=======
>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86
dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

<<<<<<< HEAD
const handleListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`)
};
=======
const handleListening = () =>
  Console.log(`Listening on: http://localhost:${PORT}`);
>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86

app.listen(PORT, handleListening);
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
<<<<<<< HEAD
  useNewUrlParser:true,
  useFindAndModify: false,
  useUnifiedTopology: true
=======
    useNewUrlParser: true,
    useFindAndModify: false
>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = () => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
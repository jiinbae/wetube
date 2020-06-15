import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  kakaotalkId: Number,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });
=======
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number,
    kakaotalkId: Number
});

UserSchema.plugin(passportLocalMongoose, {usernameField: "email"});
>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86

const model = mongoose.model("User", UserSchema);

export default model;
import passport from "passport";
import User from "./models/User.js";

passport.use(User.createStrategy());
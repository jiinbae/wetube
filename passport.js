import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User.js";
import {
    githubLoginCallback,
    facebookLoginCallback
} from "./controllers/userController.js";

passport.use(User.createStrategy());

passport.use(
    new GithubStrategy ({
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        callbackURL: `http://localhost:4000${routes.githubcallback}`
    },
    githubLoginCallback
    )
);

passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET,
        callbackURL: `http://localhost:4000${routes.facebookCallback}`
      },
      facebookLoginCallback
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
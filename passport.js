import passport from "passport";
<<<<<<< HEAD
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import {
    githubLoginCallback,
    facebookLoginCallback,
    kakaoLoginCallback
} from "./controllers/userController";
import routes from "./routes";

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
        callbackURL: `https://ff9d7e597ee3.ngrok.io${routes.facebookCallback}`,
        profileFields: ["id", "displayName", "photos", "email"],
        scope: ["public_profile", "email"]
      },
      facebookLoginCallback
    )
);

passport.use(
    new KakaoStrategy(
      {
        clientID : process.env.KAKAO_ID,
        clientSecret: process.env.KAKAO_SECRET,
        callbackURL : `http://localhost:4000${routes.kakaotalkCallback}`
      },
      kakaoLoginCallback
    )
);

=======
import User from "./models/User";

passport.use(User.createStrategy());

>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
import express from "express";
import routes from "../routes.js";
import {
    getUpload,
    postUpload,
    videoDetail,
    deleteVideo,
    getEditVideo,
    postEditVideo
} from "../controllers/videoController.js";
import { uploadVideo } from "../middlewares.js";

const videoRouter = express.Router();

// upload
videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, uploadVideo, postUpload);

// videoDetail
videoRouter.get(routes.videoDetail(), videoDetail);

// editVideo
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(),postEditVideo);

// deleteVideo
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    deleteVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

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
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
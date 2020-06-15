import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch(error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy }
<<<<<<< HEAD
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
=======
    } = req;
    let videos = [];
  try {
     videos = await Video.find({
       title: { $regex: searchingBy, $options: "i" }
     });
   } catch (error) {
     console.log(error);
   }
   res.render("search", { pageTitle: "Search", searchingBy, videos });
>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86
};
 
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    creator: req.user.id
  });
<<<<<<< HEAD
  req.user.videos.push(newVideo.id);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
=======
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async(req, res) => {
>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86
  const {
    params: { id } 
  } = req;
  try {
<<<<<<< HEAD
  const video = await (await Video.findById(id)).populate('creator');
  res.render("videoDetail", { pageTitle: video.title, video });
=======
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
<<<<<<< HEAD
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    }
=======
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
<<<<<<< HEAD
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
=======
     body: { title, description }
   } = req;
   try {
     await Video.findOneAndUpdate({ _id: id }, { title, description });
     res.redirect(routes.videoDetail(id));
   } catch (error) {
     res.redirect(routes.home);
   }
 };

 export const deleteVideo = async (req, res) => {
>>>>>>> c39c480fc514d388b6ed570473c3f213b351da86
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
    await Video.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
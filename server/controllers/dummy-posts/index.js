import DummyPost from "../../models/dummy-posts/index.js";

const getPosts = async (req, res) => {
  try {
    const posts = await DummyPost.find();
    res.send({
      posts,
    });
  } catch (err) {
    console.log(err.message);
  }
};

const createPost = async (req, res) => {
  try {
    const createPost = await DummyPost.create({
      name: req.body.name,
      post: req.body.description,
    });
    res.send({
      createPost,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export { getPosts, createPost };

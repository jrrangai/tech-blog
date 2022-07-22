const { Post } = require("../models");

const postData = [
  {
    title: "First post",
    post_content: "First content",
    user_id: 1,
  },
  {
    title: "Second post",
    post_content: "Second post content",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

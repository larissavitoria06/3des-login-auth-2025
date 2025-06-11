const dataPosts = require("../data/posts");

const posts = (req, res) => {
    res.status(200).json(dataPosts).end();
}

module.exports = {
    posts
}
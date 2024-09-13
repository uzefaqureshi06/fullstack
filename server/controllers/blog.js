const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
    //take all the data which user is sending in the request 
    const { title, image, content } = req.body

    //create a new blog and store  
    const newBlog = new Blog({ title, image, content })
    try {
        //save the newly created blog in the database
        await newBlog.save();
        res.status(200).json(newBlog);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Post not created' })
    }
}

module.exports = { createBlog }
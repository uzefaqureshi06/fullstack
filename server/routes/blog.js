const express = require('express');
const { createBlog } = require('../controllers/blog');
const blogRouter = express.Router();


blogRouter.post('/create', createBlog)

module.exports = blogRouter
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { createBlog } from '../actions/blogs'
const Create = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBlog = { title, image, content }
        dispatch(createBlog(newBlog));
    }
    return (
        <>
            <input type='text' onChange={(e) => setTitle(e.target.value)} placeholder='Enter title' />
            <input type='text' onChange={(e) => setImage(e.target.value)} placeholder='Enter image url' />
            <textarea onChange={(e) => setContent(e.target.value)} placeholder='Enter content' ></textarea>
            <button type='submit' onClick={(e) => handleSubmit(e)} > Submit</button>
        </>
    )
}

export default Create
import { CREATE_BLOG } from "../constants/actionTypes";

export default (blogs = [], action) => {
    switch (action.type) {
        case CREATE_BLOG:
            return [...blogs, action.payload];
        default:
            return blogs;

    }
}
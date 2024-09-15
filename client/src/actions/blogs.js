import * as api from '../api'
import { CREATE_BLOG } from '../constants/actionTypes';
export const createBlog = (newBlog) => async (dispatch) => {
    try {

        const { data } = await api.createBlog(newBlog);
        console.log(data)
        dispatch({ type: CREATE_BLOG, payload: data })
    } catch (error) {
        console.log(error);
    }
}


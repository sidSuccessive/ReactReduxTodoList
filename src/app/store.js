import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import getReducer from '../features/posts/get/GetSlice'
export default configureStore({
  reducer: {
    posts: postsReducer,
    get: getReducer,
  }
})
export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts,
  });
  
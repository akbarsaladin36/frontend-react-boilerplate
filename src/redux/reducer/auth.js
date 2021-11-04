const initialState = {
    data: {},
    isLogin: false,
    isLoading: false,
    isError: false,
    msg: "",
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_PENDING":
        return {
          ...state,
          isLogin: false,
          isLoading: true,
          isError: false,
        };
  
      case "REGISTER_FULFILLED":
        return {
          ...state,
          isLogin: true,
          isLoading: false,
          isError: false,
          data: action.payload.data.data,
          msg: action.payload.data.msg,
        };
  
      case "REGISTER_REJECTED":
        return {
          ...state,
          isLogin: false,
          isLoading: false,
          isError: true,
          msg: action.payload.response.data.msg,
        };
  
      case "LOGIN_PENDING":
        return {
          ...state,
          isLogin: false,
          isLoading: true,
          isError: false,
        };
  
      case "LOGIN_FULFILLED":
        return {
          ...state,
          isLogin: true,
          isLoading: false,
          isError: false,
          data: action.payload.data.data,
          msg: action.payload.data.msg,
        };
  
      case "LOGIN_REJECTED":
        return {
          ...state,
          isLogin: false,
          isLoading: false,
          isError: true,
          msg: action.payload.response.data.msg,
        };
  
      default:
        return state;
    }
  };
  
  export default auth;
const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_COURSES_LIST":
      return {
        ...state,
        coursesList: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;

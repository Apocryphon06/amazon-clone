
export const TestReducer = (state = "Home", action) => {
  switch (action.type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};

export default TestReducer;

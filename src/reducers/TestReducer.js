export const TestReducer = (state = "home", action) => {
  switch (action.type) {
    case "TEST":
      return state;

    case "SET PATH":
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};

export default TestReducer;

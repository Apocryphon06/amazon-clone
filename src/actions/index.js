export const test = () => {
  return {
    type: "TEST",
  };
};

export const setPath = (payload) => {
  return {
    type: "SET PATH",
    payload: payload,
  };
};

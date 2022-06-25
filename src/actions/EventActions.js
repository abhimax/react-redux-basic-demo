export const Increment = (obj) => async (dispatch) => {
  console.log("called inc");
  dispatch({
    type: "Increment",
  });
};
export const Decrement = (obj) => async (dispatch) => {
  console.log("called dec");

  dispatch({
    type: "Decrement",
  });
};

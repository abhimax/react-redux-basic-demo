export const Counter = (
  state = {
    Count: 0,
  },
  action
) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        Count: state.Count + 1,
      };

    case "Decrement":
      return {
        ...state,
        Count: state.Count - 1,
      };

    default:
      return state;
  }
};

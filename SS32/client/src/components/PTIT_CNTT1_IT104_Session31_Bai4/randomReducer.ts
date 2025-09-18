// Action type
const ADD_RANDOM = "ADD_RANDOM";

// Action creator
export const addRandomNumber = (number: number) => ({
  type: ADD_RANDOM,
  payload: number,
});

// Reducer
const randomReducer = (
  state: number[] = [],
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case ADD_RANDOM:
      return [...state, action.payload!];
    default:
      return state;
  }
};

export default randomReducer;

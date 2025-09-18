const TOGGLE_MODE = "TOGGLE_MODE";

export const toggleMode = () => ({
  type: TOGGLE_MODE,
});

const modeReducer = (state = false, action: { type: string }) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return !state;
    default:
      return state;
  }
};

export default modeReducer;

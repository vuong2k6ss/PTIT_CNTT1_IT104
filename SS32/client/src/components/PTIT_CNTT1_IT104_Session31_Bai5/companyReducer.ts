const initialState = "Rikkei Academy";

// Action type
const CHANGE_COMPANY = "CHANGE_COMPANY";

// Action creator
export const changeCompany = () => ({
  type: CHANGE_COMPANY,
});

// Reducer
const companyReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case CHANGE_COMPANY:
      return "RikkeiSoft";
    default:
      return state;
  }
};

export default companyReducer;

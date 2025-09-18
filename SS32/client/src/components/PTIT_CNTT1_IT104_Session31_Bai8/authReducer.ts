// authReducer.ts

interface User {
  email: string;
  password: string;
}

interface AuthState {
  loggedInUser: User | null;
}

const initialState: AuthState = {
  loggedInUser: null,
};

// Action types
export const LOGIN = "LOGIN";

// Action interfaces
interface LoginAction {
  type: typeof LOGIN;
  payload: User;
}

type AuthAction = LoginAction;

// Action creators
export const loginAction = (user: User): AuthAction => ({
  type: LOGIN,
  payload: user,
});

// Reducer
const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

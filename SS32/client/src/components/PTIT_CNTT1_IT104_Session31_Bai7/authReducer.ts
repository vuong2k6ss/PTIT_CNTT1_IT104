// authReducer.ts
interface User {
  email: string;
  password: string;
}

interface AuthState {
  registeredUser: User | null;
}

const initialState: AuthState = {
  registeredUser: null,
};

export const REGISTER = "REGISTER";

interface RegisterAction {
  type: typeof REGISTER;
  payload: User;
}

type AuthAction = RegisterAction;

export const registerAction = (user: User): AuthAction => ({
  type: REGISTER,
  payload: user,
});

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registeredUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

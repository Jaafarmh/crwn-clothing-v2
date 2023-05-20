import { createContext, useReducer } from 'react';
import { userReducer } from '../store/user.reducer';
import { createAction } from '../utils/reducer/reducer.util';

const INITIAL_STATE ={
  currentUser : null,
}

 const USER_ACTION_TYPES ={
  SET_CURRENT_USER : 'SET_CURRENT_USER',
}

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});


export const UserProvider = ({ children }) => {
const [state, dispatch] = useReducer(userReducer , INITIAL_STATE)
const {currentUser} = state;

const setCurrentUser = (user) => 
dispatch(createAction (USER_ACTION_TYPES.SET_CURRENT_USER, user));

const value = {currentUser, setCurrentUser}
return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};







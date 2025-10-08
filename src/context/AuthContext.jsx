import { createContext, useContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState, () => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state));
  }, [state]);

  const login = (userData) => {
    dispatch({ type: 'LOGIN', payload: userData });
    toast.success('Welcome back!');
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    toast.success('Logged out successfully!');
  };

  const updateUser = (userData) => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
    toast.success('Profile updated!');
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 
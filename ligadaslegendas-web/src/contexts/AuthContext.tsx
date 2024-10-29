import { createContext, ReactNode } from 'react';
import { api } from '../lib/axios';
import { useCookies } from 'react-cookie';

interface AuthProviderProps {
  children: ReactNode;
}

type Login = {
  email: string;
  password: string;
};

interface AuthContextData {
  login: (data: Login) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [, setCookie] = useCookies(['libretoken']);

  async function login({ email, password }: Login) {
    const response = await api.post('auth/login', {
      email,
      password,
    });

    const { token } = response.data;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setCookie('libretoken', token, {
      path: '/',
    });
  }

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}

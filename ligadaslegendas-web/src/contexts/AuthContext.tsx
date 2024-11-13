import { createContext, ReactNode, useState } from 'react';
import { api } from '../lib/axios';
import { useCookies } from 'react-cookie';
import { User } from '../types';

interface AuthProviderProps {
  children: ReactNode;
}

type Login = {
  email: string;
  password: string;
};

interface AuthContextData {
  login: (data: Login) => Promise<void>;
  user: Pick<User, 'name'> | undefined;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [, setCookie] = useCookies(['libretoken']);
  const [user, setUser] = useState<Pick<User, 'name'>>();

  async function login({ email, password }: Login) {
    const response = await api.post('auth/login', {
      email,
      password,
    });

    const { token, name } = response.data;

    setUser(name);
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setCookie('libretoken', token, {
      path: '/',
    });
  }

  return (
    <AuthContext.Provider value={{ login, user }}>
      {children}
    </AuthContext.Provider>
  );
}

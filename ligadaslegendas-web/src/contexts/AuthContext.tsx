import { createContext, ReactNode, useEffect, useState } from 'react';
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
  signOut: () => void;
  user: Pick<User, 'name'> | undefined;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUser] = useState<User>();

  async function login({ email, password }: Login) {
    const response = await api.post('auth/login', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
    setCookie('libretoken', token, {
      path: '/',
      maxAge: 60 * 60 * 2, // 2h
    });
    setCookie('libreuser', JSON.stringify(user), {
      path: '/',
      maxAge: 60 * 60 * 2, // 2h
    });

    window.history.back();
  }

  function signOut() {
    removeCookie('libretoken', { path: '/' });
    removeCookie('libreuser', { path: '/' });
    setUser(undefined);
  }

  useEffect(() => {
    const storedUser = cookies['libreuser'];
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

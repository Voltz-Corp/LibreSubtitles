import { api } from '../../../lib/axios';

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
};

export const UserService = {
  register: async (data: RegisterUser) => {
    await api.post('/auth/register', data);
  },
};

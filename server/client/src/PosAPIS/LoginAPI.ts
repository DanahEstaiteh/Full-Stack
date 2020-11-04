import axios, { AxiosResponse } from 'axios';
import { ApiDataType, User } from '../Types/index';

const baseUrl: string = 'http://localhost:5000';

export const handleLogin = async (
    formData: User
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const user: Omit<User, '_id' > = {
       userName: formData.userName,
       password: formData.password,
      };
      const newUser: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + '/login',
        user
      );
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  };
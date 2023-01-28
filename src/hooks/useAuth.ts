import { api } from "../utils/api";

export const useAuth = () => ({
    signin: async (name: string, password: string) => {
        const response = await api.post('/users/auth', {name, password});
        return response.data;
    }
});
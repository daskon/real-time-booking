import api from "../../services/api";

export const login = async (data: { email: string, password: string }) => {
  try{
    const res = await api.post('/auth/login', data);
    return res.data;
  } catch(err: any) {
    const msg = err.response?.data?.message || "Login failed";
    throw new Error(msg);
  }
}
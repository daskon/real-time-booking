import api from "../../services/api"

export const getUsers = async () => {
  try {
  const res = await api.get("/users");
  return res.data;
  } catch(err: any) {
    const msg = err.response?.data?.message || "Failed to fetch users";
    throw new Error(msg);
  }
}

export const updateUser = async (id: string, data: any) => {
  try {
    const res = await api.put(`/users/${id}`, data);
    return res.data;
  } catch(err: any) {
    const msg = err.response?.data?.message || "Failed to update user";
    throw new Error(msg);
  }
}

export const deleteUser = async (id: string) => {
  try {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  } catch(err: any) {
    const msg = err.response?.data?.message || "Failed to delete user";
    throw new Error(msg);
  }
}
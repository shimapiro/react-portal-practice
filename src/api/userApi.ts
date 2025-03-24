import apiClient from "./apiClient";

// ユーザー一覧
export const getUsers = () => apiClient.get("/users");

// ユーザー詳細
export const getUserById = (id: string) => apiClient.get(`/users/${id}`);

// 登録
export const createUser = (data: { name: string; email: string }) =>
  apiClient.post("/users", data);

// 更新
export const updateUser = (id: string, data: { name: string; email: string }) =>
  apiClient.put(`/users/${id}`, data);

// 削除
export const deleteUser = (id: string) => apiClient.delete(`/users/${id}`);

import axios from "axios";
import type { User } from "../types/UserTypes";

export const createUser = async (userData: User) => {
  try {
    const { data } = await axios.post("http://localhost:3000/api/user", userData);
    return data;
  } catch (error: any) {
    return {
      status: error.status,
      message: error
    }
  }
};

export const updateUser = async (userData: User) => {
  try {
    const { data } = await axios.put(`/user/${userData.id}`, userData);
    return data;
  } catch (error: any) {
    console.error("Error al editar un usuario:", error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axios.delete(`/user/${id}`);
    return data;
  } catch (error: any) {
    console.error("Error al editar un usuario:", error);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get("/user");
    return data;
  } catch (error: any) {
    console.error("Error al obtener usuarios:", error);
  }
};

export const getUser = async (id: string) => {
  try {
    const { data } = await axios.get(`/user/${id}`);
    return data;
  } catch (error: any) {
    console.error("Error al obtener un usuario:", error);
  }
};

export const authUser = async (userData: User) => {
  try {
    const { data } = await axios.post("http://localhost:3000/api/login/", userData);
    return data;
  } catch (error: any) {
    console.error("Error al autenticar un usuario:", error);
  }
};

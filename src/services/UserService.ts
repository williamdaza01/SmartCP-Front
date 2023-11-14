import axios from "axios";
import type { User } from "../types/UserTypes";
 

export const createUser = async (userData: User) => {
  try {
    const { data } = await axios.post(import.meta.env.PUBLIC_URLPROD+"/user", userData);
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
    const { data } = await axios.put(import.meta.env.PUBLIC_URLPROD+`/user/${userData._id}`, userData);
    return data;
  } catch (error: any) {
    console.error("Error al editar un usuario:", error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axios.delete(import.meta.env.PUBLIC_URLPROD+`/user/${id}`);
    return data;
  } catch (error: any) {
    console.error("Error al editar un usuario:", error);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get(import.meta.env.PUBLIC_URLPROD+"/users");
    return data;
  } catch (error: any) {
    console.error("Error al obtener usuarios:", error);
  }
};

export const getUser = async (id: string) => {
  try {
    const { data } = await axios.get(import.meta.env.PUBLIC_URLPROD+`/user/${id}`);
    return data as User;
  } catch (error: any) {
    console.error("Error al obtener un usuario:", error);
  }
};

export const authUser = async (userData: User) => {
  try {
    const { data } = await axios.post(import.meta.env.PUBLIC_URLPROD+"/login/", userData);
    return data;
  } catch (error: any) {
    console.error("Error al autenticar un usuario:", error);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const { data } = await axios.get(import.meta.env.PUBLIC_URLPROD+"/userbyemail/"+email);
    return data;
  } catch (error) {
    
  }
}

import axios from "axios";
import type { Square } from "../types/SquareTypes";
 

export const createSquare = async (squareData: Square) => {
  try {
    const { data } = await axios.post(import.meta.env.PUBLIC_URLPROD+"/square", squareData);
    return data;
  } catch (error) {
    console.error("Error al crear una plaza:", error);
  }
};

export const updateSquare = async (id: string, squareData: Square) => {
  try {
    const { data } = await axios.put(import.meta.env.PUBLIC_URLPROD+`/square/${id}`, squareData);
    return data;
  } catch (error) {
    console.error("Error al editar una plaza:", error);
  }
};

export const deleteSquare = async (id: string) => {
  try {
    const { data } = await axios.delete(import.meta.env.PUBLIC_URLPROD+`/square/${id}`);
    return data;
  } catch (error) {
    console.error("Error al eliminar una plaza:", error);
  }
};

export const getSquare = async (id: string) => {
  try {
    const { data } = await axios.get(import.meta.env.PUBLIC_URLPROD+`/square/${id}`);
    return data;
  } catch (error) {
    console.error("Error al obtener una plaza:", error);
  }
};

export const getSquares = async () => {
  try {
    const { data } = await axios.get(import.meta.env.PUBLIC_URLPROD+"/squares");
    return data;
  } catch (error) {
    console.error("Error al obtener las plazas:", error);
  }
};

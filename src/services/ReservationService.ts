import axios from "axios";
import type { Reservation } from "../types/ReservationTypes";
 

export const createReservation = async (reservationData: Reservation) => {
  try {
    const { data } = await axios.post(import.meta.env.PUBLIC_URLPROD+"/reservation", reservationData);
    return data;
  } catch (error) {
    console.error("Error al crear una reserva:", error);
  }
};

export const getReservations = async () => {
  try {
    const { data } = await axios.get(import.meta.env.PUBLIC_URLPROD+"/reservations");
    return data;
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
  }
};

export const getReservation = async (id: string) => {
  try {
    const { data } = await axios.get(import.meta.env.PUBLIC_URLPROD+`/reservations/${id}`);
    return data;
  } catch (error) {
    console.error("Error al obtener una reserva:", error);
  }
};

export const updateReservation = async (
  id: string,
  reservationData: Reservation
) => {
  try {
    const { data } = await axios.put(import.meta.env.PUBLIC_URLPROD+`/reservation/${id}`, reservationData);
    return data;
  } catch (error) {
    console.error("Error al actualizar una reserva:", error);
  }
};

export const deleteReservation = async (id: string) => {
  try {
    const response = await axios.delete(import.meta.env.PUBLIC_URLPROD+`/reservation/${id}`);
    return response;
  } catch (error) {
    console.error("Error al eliminar una reserva:", error);
  }
};

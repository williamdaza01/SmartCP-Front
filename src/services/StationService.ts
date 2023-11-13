import axios from "axios";
import type { Station } from "../types/StationTypes";

export const createStation = async (stationData: Station) => {
  try {
    const { data } = await axios.post("/station", stationData);
    return data;
  } catch (error) {
    console.error("Error al crear una estación:", error);
  }
};

export const updateStation = async (id: string, stationData: Station) => {
  try {
    const { data } = await axios.put(`/station/${id}`, stationData);
    return data;
  } catch (error) {
    console.error("Error al editar una estación:", error);
  }
};

export const deleteStation = async (id: string) => {
  try {
    const { data } = await axios.delete(`/station/${id}`);
    return data;
  } catch (error) {
    console.error("Error al eliminar una estación:", error);
  }
};

export const getStation = async (id: string) => {
  try {
    const { data } = await axios.get(`/station/${id}`);
    return data;
  } catch (error) {
    console.error("Error al obtener una estación:", error);
  }
};

export const getStations = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/stations");
    return data;
  } catch (error) {
    console.error("Error al obtener las estaciones:", error);
  }
};

export const getReservationByStationId = async (id: string) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/stationbysquare/"+id);
    return data;
  } catch (error) {
    console.error("Error al obtener las reservas por estación:", error);
  }
} 

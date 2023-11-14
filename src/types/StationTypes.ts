import type { Square } from "./SquareTypes";

export interface Station{
    _id?: string,
    name_station: string,
    coords: {
        lat: number,
        lng: number
    },
    squares: [Square]
}
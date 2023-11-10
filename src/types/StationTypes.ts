import type { Square } from "./SquareTypes";

export interface Station{
    name_station: string,
    coords: {
        lat: number,
        lng: number
    },
    squares: [Square]
}
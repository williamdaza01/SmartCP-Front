import type { Square } from "./SquareTypes";

export interface Station{
    name_station: string,
    coords: string,
    squares: [Square]
}
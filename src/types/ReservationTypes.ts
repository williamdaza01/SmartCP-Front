import type { Square } from "./SquareTypes";
import type { User } from "./UserTypes";

export interface Reservation {
  id_user: string;
  id_square: string;
  reservation_date: Date;
  date: Date;
  state: Boolean;
}

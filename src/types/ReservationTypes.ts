import type { Square } from "./SquareTypes";
import type { User } from "./UserTypes";

export interface Reservation {
  id_user: User;
  id_square: Square;
  reservation_date: Date;
  reservation_time: String;
  date: Date;
  state: Boolean;
}

import { Round } from "./round";
import { User } from "./user"

export interface Room {
  id?: string,
  name: string,
  onlineUsers?: Array<User>,
  rounds?: Array<Round>,
  roundFormatID?: string,
  showResults?: boolean,
}
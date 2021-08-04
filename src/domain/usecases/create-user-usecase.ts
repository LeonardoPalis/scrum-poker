import { User } from "../entities/user";

export interface ICreateUser {
  execute(username: String) : Promise<User>;
}
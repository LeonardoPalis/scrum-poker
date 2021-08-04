import { User } from "../domain/entities/user";

export interface ICreateUserRepository {
  execute(user: User) : Promise<User>;
}
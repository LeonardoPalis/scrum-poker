import { ICreateUserRepository } from "../../../repository/create-user-repository";
import { User } from "../../entities/user";
import { ICreateUser } from "../create-user-usecase";

export class CreateUserUsecase implements ICreateUser {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  private getLocalUUID() {
    return window.localStorage.getItem("uuid");
  }

  private setLocalUUID(userID: string) {
    return window.localStorage.setItem("uuid", userID);
  }

  private async createNewUser(user: User): Promise<User> {
    const createdUser: User = await this.createUserRepository.execute(user);
    this.setLocalUUID(createdUser.id || "");
    return createdUser;
  }

  async execute(username: string): Promise<User> {
    const userUUID = this.getLocalUUID();
    if (!userUUID || userUUID === "") {
      const user: User = {
        name: username,
      };
      return await this.createNewUser(user);
    }

    return Promise.resolve({
      id: userUUID,
      name: username,
    });
  }
}

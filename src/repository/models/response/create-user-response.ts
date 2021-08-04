import { User } from "../../../domain/entities/user"

export class CreateUserResponse {

  constructor (
    private readonly response: any,
  ) {}

  translate() : User {
    return {
      id: this.response?.data?.createUserOnline?.id,
      name: this.response?.data?.createUserOnline?.name,
    } as User
  }
}

import { API, graphqlOperation } from "aws-amplify";
import { User } from "../../domain/entities/user";
import { createUserOnline } from "../../graphql/mutations";
import { ICreateUserRepository } from "../create-user-repository";
import { CreateUserResponse } from "../models/response/create-user-response";

export class CreateUserRepository implements ICreateUserRepository {
  
  async execute(user: User): Promise<User> {

    const response = await API.graphql(
      graphqlOperation(createUserOnline, { input: user })
    );
    return new CreateUserResponse(response).translate();
  }

}
import { ICreateUser } from "../../domain/usecases/create-user-usecase";
import { CreateUserUsecase } from "../../domain/usecases/impl/create-user-usecase-impl";
import { ICreateUserRepository } from "../../repository/create-user-repository";
import { CreateUserRepository } from "../../repository/impl/create-user-repository-impl";

export function createUserFactory(): ICreateUser {
  const createUserRepository: ICreateUserRepository = new CreateUserRepository();
  const createUserUsecase: ICreateUser = new CreateUserUsecase(createUserRepository);
  return createUserUsecase;
}
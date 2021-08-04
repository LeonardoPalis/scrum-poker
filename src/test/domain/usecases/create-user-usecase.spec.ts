import { User } from "../../../domain/entities/user";
import { ICreateUser } from "../../../domain/usecases/create-user-usecase";
import { CreateUserUsecase } from "../../../domain/usecases/impl/create-user-usecase-impl";
import { ICreateUserRepository } from "../../../repository/create-user-repository";

const usernameRequest: string = "test mock";

const createdUserResponse: User = {
  id: "123123",
  name: usernameRequest
}

const ack = jest.fn();

class CreateUserRepositorySpy implements ICreateUserRepository {
  execute(user: User): Promise<User> {
    ack();
    return Promise.resolve(createdUserResponse);
  }
}
describe('<Create User Usecase>', () => {

  const callRepository = async () => {
    const createUserRepositorySpy: CreateUserRepositorySpy = new CreateUserRepositorySpy();
    const createUserUsecase: ICreateUser = new CreateUserUsecase(createUserRepositorySpy);
    await createUserUsecase.execute(usernameRequest);
  }

  it("Should receive user from repository", async ()=> {
    const createUserRepositorySpy: CreateUserRepositorySpy = new CreateUserRepositorySpy();
    const createUserUsecase: ICreateUser = new CreateUserUsecase(createUserRepositorySpy);
    const createdUser: User = await createUserUsecase.execute(usernameRequest);
    expect(createdUser).toEqual(createdUserResponse);
  });

  it("Should save uuid in localstorage", async ()=> {
    localStorage.clear();
    const createUserRepositorySpy: CreateUserRepositorySpy = new CreateUserRepositorySpy();
    const createUserUsecase: ICreateUser = new CreateUserUsecase(createUserRepositorySpy);
    const createdUser: User = await createUserUsecase.execute(usernameRequest);
    const uuid = localStorage.getItem('uuid');
    expect(uuid).toEqual(createdUser.id);
  })

  it("Should call repository if localstorage empty", async ()=> {
    localStorage.clear();
    callRepository();
    expect(ack).toBeCalled();
  });

  it("Should not call repository if uuid are registered in localstorage", async ()=> {
    localStorage.clear();
    await callRepository();
    await callRepository();
    expect(ack).not.toBeCalledTimes(2);
  });
})
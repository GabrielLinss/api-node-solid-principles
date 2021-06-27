import { MysqlUsersRepository } from "../../repositories/implementations/MysqlUsersRepository";
import { ShowUserUseCase } from "./ShowUserUseCase";
import { ShowUserController } from "./ShowUserController";

const mysqlUsersRepository = new MysqlUsersRepository()

const showUserUseCase = new ShowUserUseCase(
  mysqlUsersRepository
)

const showUserController = new ShowUserController(
  showUserUseCase
)

export { showUserUseCase, showUserController }
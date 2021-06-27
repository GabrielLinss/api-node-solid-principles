import { MysqlUsersRepository } from "../../repositories/implementations/MysqlUsersRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { ListUsersController } from "./ListUsersController";

const mysqlUsersRepository = new MysqlUsersRepository()

const listUsersUseCase = new ListUsersUseCase(
  mysqlUsersRepository
)

const listUsersController = new ListUsersController(
  listUsersUseCase
)

export { listUsersUseCase, listUsersController }
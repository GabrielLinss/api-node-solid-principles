import { MysqlUsersRepository } from "../../repositories/implementations/MysqlUsersRepository";
import { EditUserUseCase } from "./EditUserUseCase";
import { EditUserController } from "./EditUserController";

const mysqlUsersRepository = new MysqlUsersRepository()

const editUserUseCase = new EditUserUseCase(
  mysqlUsersRepository
)

const editUserController = new EditUserController(
  editUserUseCase
)

export { editUserUseCase, editUserController }
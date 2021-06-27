import { MysqlUsersRepository } from "../../repositories/implementations/MysqlUsersRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserController } from "./DeleteUserController";

const mysqlUsersRepository = new MysqlUsersRepository()

const deleteUserUseCase = new DeleteUserUseCase(
  mysqlUsersRepository
)

const deleteUserController = new DeleteUserController(
  deleteUserUseCase
)

export { deleteUserUseCase, deleteUserController }
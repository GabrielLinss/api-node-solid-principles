import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MysqlUsersRepository } from "../../repositories/implementations/MysqlUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mysqlUsersRepository = new MysqlUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  mysqlUsersRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
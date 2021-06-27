import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";

export class ListUsersUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute() {
    return await this.usersRepository.findAll();
  }
}
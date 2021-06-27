import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ShowUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user
  }
}
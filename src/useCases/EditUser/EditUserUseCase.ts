import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IEditUserRequestDTO } from "./EditUserDTO";

export class EditUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: string, data: IEditUserRequestDTO) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    await this.usersRepository.update(id, data);
  }
}
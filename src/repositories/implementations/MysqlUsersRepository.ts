import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { IEditUserRequestDTO } from "../../useCases/EditUser/EditUserDTO";

export class MysqlUsersRepository implements IUsersRepository {
  async findAll(): Promise<User[]> {
    return await User.find()
  }

  async findByEmail(email: string): Promise<User> {
    const user = await User.findOne({ email })

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await User.findOne(id)

    return user
  }

  async save(user: User): Promise<void> {
    await User.save(user)
  }

  async update(id: string, data: IEditUserRequestDTO): Promise<void> {
    await User.update(id, { ...data });
  }

  async delete(user: User): Promise<void> {
    await User.remove(user)
  }
}
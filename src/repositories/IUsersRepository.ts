import { User } from "../entities/User";
import { IEditUserRequestDTO } from "../useCases/EditUser/EditUserDTO";

export interface IUsersRepository {
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  delete(user: User): Promise<void>;
  save(user: User): Promise<void>;
  update(id: string, data: IEditUserRequestDTO): Promise<void>;
}
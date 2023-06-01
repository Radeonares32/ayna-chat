// User dtos
import { ICreateUserDTO } from "../../users/dtos/ICreateUserDTO";

export interface IUsersRepository {
  findAll(): Promise<ICreateUserDTO[]>;
  findById(id: string): Promise<ICreateUserDTO | undefined>;
  findByUsername(username: string): Promise<ICreateUserDTO | undefined>;
  create(data: ICreateUserDTO): Promise<{ message: string }>;
}

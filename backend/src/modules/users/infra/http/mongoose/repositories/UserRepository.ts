//user entity
import { UserModel } from "../entites/User";
//repositories
import { IUsersRepository } from "../../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";

export class UserRepository implements IUsersRepository {
  findAll(): Promise<ICreateUserDTO[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await UserModel.find({});
        resolve(user);
      } catch (err) {
        reject({ message: err });
      }
    });
  }
  findById(id: string): Promise<ICreateUserDTO | undefined> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await UserModel.findById(id);
        resolve(user as ICreateUserDTO | undefined);
      } catch (err) {
        reject({ message: err });
      }
    });
  }
  findByUsername(username: string): Promise<ICreateUserDTO | undefined> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await UserModel.find({ username });
        resolve(user as unknown as ICreateUserDTO | undefined);
      } catch (err) {
        reject({ message: err });
      }
    });
  }
  create(data: ICreateUserDTO): Promise<{ message: string }> {
    return new Promise(async (resolve, reject) => {
      try {
        await UserModel.create({ data });
        resolve({ message: "Success Created User" });
      } catch (err) {
        reject({ message: err });
      }
    });
  }
}

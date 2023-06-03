//user entity
import { UserModel } from "../entites/User";
//repositories
import { IUsersRepository } from "../../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";

//providers
import { providers } from "../../../../provider/provider";
export class UserRepository implements IUsersRepository {
  bcryptHashProvider = new providers.BCryptHashProvider();
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
        const user = await UserModel.find({ username }).catch((err) =>
          console.log(err)
        );
        resolve(user as unknown as ICreateUserDTO | undefined);
      } catch (err) {
        reject({ message: err });
      }
    });
  }
  create(data: ICreateUserDTO): Promise<{ message: string }> {
    return new Promise(async (resolve, reject) => {
      try {
        const hash = this.bcryptHashProvider.generateHash(data.password);
        await UserModel.create({
          username: data.username,
          password: hash,
        }).catch((err) => console.log(err));
        resolve({ message: "Success Created User" });
      } catch (err) {
        reject({ message: err });
      }
    });
  }
}

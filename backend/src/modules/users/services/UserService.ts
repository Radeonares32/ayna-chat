//user entites
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

//user repository
import { UserRepository } from "../infra/http/mongoose/repositories/UserRepository";

//validations
import { validations } from "../../../shared/validations/validations";

export class UserService {
  private userRepository: UserRepository = new UserRepository();
  async findAllUser(): Promise<ICreateUserDTO[]> {
    return await this.userRepository.findAll();
  }
  async findByIdUser(
    id: string
  ): Promise<ICreateUserDTO | { message: string }> {
    const isValidId = validations.isIdValidation(id);
    if (isValidId.isValid) {
      return await this.findByIdUser(id);
    } else {
      return {
        message: isValidId.message,
      };
    }
  }
}

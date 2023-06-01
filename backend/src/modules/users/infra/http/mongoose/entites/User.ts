import { model, Schema } from "mongoose";

//User Entity
import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";

const UserSchema = new Schema<ICreateUserDTO>({
  username: String,
  message: [{}],
});

export const UserModel = model("user", UserSchema);

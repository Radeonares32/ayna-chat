import { model, Schema } from "mongoose";

//User Entity
import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";

const UserSchema = new Schema<ICreateUserDTO>({
  username: String,
  password:String,
});

export const UserModel = model("user", UserSchema);

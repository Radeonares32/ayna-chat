import { model, Schema } from "mongoose";

//User Entity
import { IUser } from "../../../../entites/IUserEntity";

const UserSchema = new Schema<IUser>({
  username: String,
  message: [{}],
});

export const UserModel = model("user", UserSchema);

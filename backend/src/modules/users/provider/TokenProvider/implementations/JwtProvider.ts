import { verify, decode, sign, Jwt, JwtPayload } from "jsonwebtoken";

//jwt repository
import { ITokenProvider } from "../models/ITokenProvider";

//config
import { configs } from "../../../../../config/config";

configs.dotenvConfig();

export class TokenProvider implements ITokenProvider {
  generateToken(payload: string): Promise<Jwt> {
    return new Promise((resolve, reject) => {
      try {
        const token: Jwt | any = sign(
          payload,
          process.env.SECRET_KEY as string
        );
        resolve(token);
      } catch (err) {
        reject({ message: err });
      }
    });
  }
  verifyToken(token: string): Promise<JwtPayload> {
    return new Promise((resolve, reject) => {
      try {
        const verifyToken: JwtPayload | any = verify(
          token,
          process.env.SECRET_KEY as string
        );
        resolve(verifyToken);
      } catch (err) {
        reject({ message: err });
      }
    });
  }
  decodeToken(token: string): Promise<JwtPayload> {
    return new Promise((resolve, reject) => {
      try {
        const decodeToken: JwtPayload | any = decode(token);
        resolve(decode);
      } catch (err) {
        reject({ message: err });
      }
    });
  }
}

import { Jwt, JwtPayload } from "jsonwebtoken";

export interface ITokenProvider {
  generateToken(payload: string): Promise<Jwt>;
  verifyToken(token: string): Promise<JwtPayload>;
  decodeToken(token: string): Promise<JwtPayload>;
}

import { BCryptHashProvider } from "./HashProvider/implementations/BCryptHashProvider";
import { TokenProvider } from './TokenProvider/implementations/JwtProvider'

export const providers = {
  BCryptHashProvider,
  TokenProvider
};

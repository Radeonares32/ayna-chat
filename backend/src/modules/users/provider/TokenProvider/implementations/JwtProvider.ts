import { verify,decode,sign, Jwt, JwtPayload } from 'jsonwebtoken'

//jwt repository
import { ITokenProvider } from '../models/ITokenProvider'

export class TokenProvider implements ITokenProvider {
    generateToken(payload: string): Promise<Jwt> {
        throw new Error('Method not implemented.')
    }
    verifyToken(token: string): Promise<JwtPayload> {
        throw new Error('Method not implemented.')
    }
    decodeToken(token: string): Promise<JwtPayload> {
        throw new Error('Method not implemented.')
    }

}
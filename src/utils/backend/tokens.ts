import { UserPayload } from '@/types/backend/UserPayload';
import jwt, { JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'default_secret'; // Replace 'default_secret' with your default secret or handle error accordingly

export const signAccessToken = (data: UserPayload): string => {
  const token = jwt.sign(data, secret, { expiresIn: '2h' }); // Set expiration time as needed
  return token;
};

export const signRefreshToken = (data: UserPayload): string => {
  const token = jwt.sign(data, secret, { expiresIn: '7d' }); // Set expiration time as needed
  return token;
};

export const decodeToken = (token: string): string | JwtPayload => {
  const decoded = jwt.verify(token, secret);
  return decoded;
};

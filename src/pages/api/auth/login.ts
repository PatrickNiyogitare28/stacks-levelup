import { NextApiRequest, NextApiResponse } from 'next';
import * as _ from 'lodash';
import { verifyPassword } from '@/utils/backend/hash-password';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';

type Data = {
  error?: string;
  message?: string;
  data?: unknown;
  authToken?: string;
};
import { LoginDocument, Users as User } from '@/generated/graphql';
import { signAccessToken, signRefreshToken } from '@/utils/backend/tokens';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      const data: {users: User[]} = await graphqlRequestClient.request(LoginDocument, { email });
      const user: User = data.users[0]
      if(!user) return res.status(HttpStatusCode.Unauthorized).json({message: 'Invalid credentials'});
      const isVerified = await verifyPassword(password, user.password);
      if(!isVerified) return res.status(HttpStatusCode.Unauthorized).json({message: 'Invalid credentials'});
      
      const accessToken = signAccessToken(_.omit(user, ['password']));
      res.setHeader('Set-Cookie', `accessToken=${accessToken}; Path=/; HttpOnly`);

      res.status(HttpStatusCode.Ok).json({data: {
        message: "Logged in successfully",
        accessToken: accessToken,
        refreshToken: signRefreshToken(_.omit(user, ['password']))
      } });
    } catch (error) {
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to login' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}

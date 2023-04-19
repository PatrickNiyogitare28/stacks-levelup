import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '@/utils/backend/hash-password';
import { SignupDocument } from '@/generated/graphql';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';

type Data = {
  error?: string;
  message?: string;
  data?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { email, password, fullName } = req.body;
      const hashedPassword = await hashPassword(password);
      const user = await graphqlRequestClient.request(SignupDocument, {full_name: fullName, email, password: hashedPassword})
      res.status(HttpStatusCode.Created).json({ message: 'User created successfully', data: user });
    } catch (error) {
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to sign up' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}

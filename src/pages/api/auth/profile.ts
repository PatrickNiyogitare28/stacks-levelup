import { UserPayload } from '@/types/backend/UserPayload';
import { decodeToken } from '@/utils/backend/tokens';
import { HttpStatusCode } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    error?: string;
    message?: string;
    data?: unknown;
  };
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(HttpStatusCode.Unauthorized).json({ error: 'Unauthorized' });
    }
    const token = authHeader.slice(7); 
    if(!token) return res.status(HttpStatusCode.Unauthorized).json({error: 'Unauthorized'})
    const decoded = await decodeToken(token);
    if(!decoded) return res.status(HttpStatusCode.Unauthorized).json({error: 'Unauthorized'})

    req.query.user_id = (decoded as UserPayload).id.toString();
    return res.status(HttpStatusCode.Ok).json({data: decoded})
  } catch (error) {
    return res.status(HttpStatusCode.Unauthorized).json({ error: 'Unauthorized' });
  }
};


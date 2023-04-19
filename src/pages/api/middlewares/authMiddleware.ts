import { decodeToken } from '@/utils/backend/tokens';
import { HttpStatusCode } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const authMiddleware = (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(HttpStatusCode.Unauthorized).json({ error: 'Unauthorized' });
    }
    const token = authHeader.slice(7); 
    if(!token) return res.status(HttpStatusCode.Unauthorized).json({error: 'Unauthorized'})
    const decoded = await decodeToken(token);
    if(!decoded) return res.status(HttpStatusCode.Unauthorized).json({error: 'Unauthorized'})

    req.query.user_id = decoded.id;
    return handler(req, res);
  } catch (error) {
    return res.status(HttpStatusCode.Unauthorized).json({ error: 'Unauthorized' });
  }
};

export default authMiddleware;

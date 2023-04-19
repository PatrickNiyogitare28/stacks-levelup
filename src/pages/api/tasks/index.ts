import { NextApiRequest, NextApiResponse } from 'next';
import { FetchTasksDocument, AddTaskDocument } from '@/generated/graphql';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';
import authMiddleware from '../middlewares/authMiddleware';

type Data = {
  error?: string;
  message?: string;
  data?: unknown;
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    await getHandler(req, res); // Call the getHandler for GET requests
  } else if (req.method === 'POST') {
    await postHandler(req, res); // Call the postHandler for POST requests
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

async function getHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const user_id = req.body.user_id;
    const response = await graphqlRequestClient.request(FetchTasksDocument, {user_id});
    res.status(HttpStatusCode.Ok).json({ data: response });
  } catch (error) {
    res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to fetch tasks' });
  }
}

async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { name, start_time, end_time, user_id } = req.body;
    const response = await graphqlRequestClient.request(AddTaskDocument, {
      name, start_time, end_time, user_id
    });
    res.status(HttpStatusCode.Created).json({ data: response });
  } catch (error) {
    res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to create task' });
  }
}

export default authMiddleware(handler);

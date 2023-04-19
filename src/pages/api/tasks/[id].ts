import { NextApiRequest, NextApiResponse } from 'next';
import { UpdateTaskDocument, DeleteTaskDocument, GetTaskByIdDocument } from '@/generated/graphql';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';
import authMiddleware from '../middlewares/authMiddleware';
import { TaskPayload } from '@/types/backend/TaskPayload';

type Data = {
  error?: string;
  message?: string;
  data?: unknown;
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'PUT') {
    await putHandler(req, res);
  } else if (req.method === 'DELETE') {
    await deleteHandler(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

async function putHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    try {
      const { user_id } = req.query;
      const { id } = req.query; 
  
      const taskResponse: {tasks_by_pk: TaskPayload} = await graphqlRequestClient.request(GetTaskByIdDocument, { id });
      const task = taskResponse.tasks_by_pk;
      if (!task || task.user_id != user_id) {
        res.status(HttpStatusCode.Forbidden).json({ error: 'Not allowed to perform this action' });
        return;
      }
      const response = await graphqlRequestClient.request(UpdateTaskDocument, {
        id,
        completed: !task.completed
      });

      res.status(HttpStatusCode.Ok).json({ data: response });
    } catch (error) {
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to update task' });
    }
  }

async function deleteHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { user_id } = req.query;
    const { id } = req.query; 

    const taskResponse: {tasks_by_pk: TaskPayload} = await graphqlRequestClient.request(GetTaskByIdDocument, { id });
    const task = taskResponse.tasks_by_pk;
    if (!task || task.user_id != user_id) {
      res.status(HttpStatusCode.Forbidden).json({ error: 'Not allowed to perform this action' });
      return;
    }
    const response = await graphqlRequestClient.request(DeleteTaskDocument, {
      id,
    });

    res.status(HttpStatusCode.Ok).json({ data: response });
  } catch (error) {
    res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to delete task' });
  }
}

export default authMiddleware(handler);

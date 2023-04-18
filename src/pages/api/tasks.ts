import { NextApiRequest, NextApiResponse } from 'next';
import { FetchTasksDocument, AddTaskDocument } from '@/generated/graphql';
import graphqlRequestClient from '@/lib/client';

type Data = {
  error?: string;
  message?: string;
  data?: unknown;
};

export default async function handler(
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
    const response = await graphqlRequestClient.request(FetchTasksDocument);
    console.log(response);
    res.status(200).json({ data: response });
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
}

async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // Extract the data from the request body
    const { name, start_time, end_time } = req.body;
    
    // Call the GraphQL mutation to create a task
    const response = await graphqlRequestClient.request(AddTaskDocument, {
      name, start_time, end_time
    });
    res.status(200).json({ data: response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
}

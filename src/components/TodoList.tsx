import { useAddTaskMutation, useFetchTasksQuery } from '@/generated/graphql';
import { useState } from 'react';
import { HiPlusCircle } from 'react-icons/hi';

const TodoList = () => {
  const [{ data }] = useFetchTasksQuery();
  const [{ data: newTaskData }, addData] = useAddTaskMutation();
  const [newTask, setNewTask] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  const handleAddTask = async () => {
    if (newTask.trim() === '') {
      return;
    }

    await addData({ name: newTask, start_time: startTime, end_time: endTime });
    setNewTask('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-green-50 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter a new task..."
          className="flex-grow border border-gray-300 p-2 rounded-l-md"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <input
          type="text"
          placeholder="Start time"
          className="w-32 border border-gray-300 p-2 rounded-l-none rounded-r-md"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <input
          type="text"
          placeholder="End time"
          className="w-32 border border-gray-300 p-2 rounded-l-none rounded-r-md"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        <button
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r-md"
          onClick={handleAddTask}
        >
          <HiPlusCircle size={24} />
        </button>
      </div>

      {data?.tasks.length === 0 ? (
        <p className="text-gray-400">No tasks</p>
      ) : (
        <ul className="list-disc pl-6">
          {data?.tasks.map((task, index: number) => (
            <li key={task.id} className="mb-2">
              <span className="font-bold">{task.name}</span> | {task.start_time} - {task.end_time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

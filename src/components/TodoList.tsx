import { useFetchTasksQuery } from '@/generated/graphql';
import { useState } from 'react';
import { HiPlusCircle } from 'react-icons/hi';

const TodoList = () => {

  const [{data}] = useFetchTasksQuery();
  console.log("data here");
  console.log(data);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return;
    }

    // setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter a new task..."
          className="flex-grow border border-gray-300 p-2 rounded-l-md"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
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
              {task.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

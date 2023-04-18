import { useAddTaskMutation, useFetchTasksQuery } from '@/generated/graphql';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormInput from './FormInput';

const TodoList = () => {
    const [{ data }] = useFetchTasksQuery();
    const [{ data: newTaskData }, addData] = useAddTaskMutation();
    const schema = Yup.object().shape({
        name: Yup.string().required('This field is required.'),
        start_time: Yup.string().required('This field is required.'),
        end_time: Yup.string().required('This field is required.'),
    })
    const { handleSubmit, reset, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (formData: any) => {
        await addData({ name: formData.name, start_time: formData.start_time, end_time: formData.end_time });
        reset();
    };

    console.log(errors.root);

    return (
        <div className="max-w-md mx-auto p-4 bg-green-50 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <FormInput
                            placeholder="Task"
                            defaultValue=""
                            name="name"
                            register={((name:string) => register(name))}
                            type="text"
                            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <FormInput
                            placeholder="Start time"
                            defaultValue=""
                            name="start_time"
                            register={((name:string) => register(name))}
                            type="text"
                            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <FormInput
                            placeholder="End time"
                            defaultValue=""
                            name="end_time"
                            register={((name:string) => register(name))}
                            type="text"
                            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md focus:outline-none"
                    >
                        Add Task
                    </button>
                </div>
            </form>
            

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

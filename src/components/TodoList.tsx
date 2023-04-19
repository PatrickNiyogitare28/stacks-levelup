import { useMutation, useQuery } from '@tanstack/react-query'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Tasks as Task } from '@/generated/graphql';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from './FormInput';
import axiosInstance from '@/lib/axios';
import { CustomError } from '@/types/frontend/axios';
import { useEffect } from 'react';
import { AxiosError, HttpStatusCode } from 'axios';
import { useRouter } from 'next/router';

const TodoList = () => {
    const router = useRouter();
    const schema = Yup.object().shape({
        name: Yup.string().required('This field is required.'),
        start_time: Yup.string().required('This field is required.'),
        end_time: Yup.string().required('This field is required.'),
    })
    const { handleSubmit, reset, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const { isLoading, error: fetchTasksError, data, isFetching, refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: () =>
            axiosInstance
                .get("/tasks")
                .then((res) => res?.data?.data),
    });

    useEffect(() => {
        const castedError = fetchTasksError as AxiosError;
        if (castedError?.response?.status == HttpStatusCode.Unauthorized) {
            router.push('/auth/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchTasksError])


    const handleSaveTask = async (formData: FormData) => {
        const { data: response } = await axiosInstance.post("/tasks", formData);
        return response.data;
    }

    const { mutate: createTaskMutation, isLoading: isAddingTask } = useMutation(handleSaveTask, {
        onSuccess: (response: CustomError) => {
            toast.success(response?.message || "New task added")
            refetch();
            reset();
        },
        onError: (e: CustomError) => {
            toast.error(e?.response?.data?.message || "Failed to add task")
        },
    });

    const onSubmit = async (formData: any) => {
        try {
            createTaskMutation(formData);
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-3/4 bg-green-50 rounded-lg">
                <Toaster />
                <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

                <div className="grid grid-cols-2 gap-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <FormInput
                                    placeholder="Task"
                                    defaultValue=""
                                    name="name"
                                    register={((name: string) => register(name))}
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
                                    register={((name: string) => register(name))}
                                    type="text"
                                    className="w-full px-4 py-2 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <FormInput
                                    placeholder="End time"
                                    defaultValue=""
                                    name="end_time"
                                    register={((name: string) => register(name))}
                                    type="text"
                                    className="w-full px-4 py-2 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md focus:outline-none"
                            >
                                {isAddingTask ? "Loading ..." : "Add Tasks"}
                            </button>
                        </div>
                    </form>

                    <div className="p-4">
                        {data?.tasks?.length === 0 ? (
                            <p className="text-gray-400">No tasks</p>
                        ) : (
                            <ul className="list-disc pl-6">
                                {data?.tasks?.map((task: Task, index: number) => (
                                    <li key={task.id} className="mb-2 flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={task.completed as boolean}
                                        />
                                        <span className="font-bold">{task.name}</span> | {task.start_time} - {task.end_time}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                </div>
            </div>
        </div>

    );
};

export default TodoList;

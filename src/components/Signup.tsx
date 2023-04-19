import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import axiosInstance from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { CustomError, CustomResponse } from '@/types/frontend/axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignupForm = () => {
    const router = useRouter();
    const schema = Yup.object().shape({
        fullName: Yup.string().required('Full name is required.'),
        email: Yup.string().required('Email is required.').email('Please enter a valid email address.'),
        password: Yup.string().required('Password is required.').min(6, 'Password must be at least 6 characters.'),
    });

    const { handleSubmit, reset, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleSignup = async (formData: FormData) => {
        const { data: response } = await axiosInstance.post("/auth/signup", formData);
        return response.data;
    }

    const { mutate, isLoading } = useMutation(handleSignup, {
        onSuccess: (response: CustomResponse) => {
            toast.success(response?.message || "Signup successfully")
            reset();
            router.push('/auth/login');
        },
        onError: (e: CustomError) => {
            toast.error(e?.response?.data?.message || "An error occurred")
        },
    });
    const onSubmit = async (formData: any) => {
        try {
            mutate(formData);
        }
        catch (error) {
            console.error('Failed to login:', error);
        }
    };


    return (
        <div className='w-full h-[100vh] flex justify-around items-center'>
            <Toaster />
            <div className="max-w-md mx-auto p-4 bg-green-50 rounded-lg w-3/5">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="fullName" className="block mb-1 font-medium">Full Name</label>
                            <input
                                id="fullName"
                                {...register("fullName")}
                                type="text"
                                className="w-full px-4 py-2 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
                            />
                            {errors.fullName && <p className="text-red-500">{errors.fullName.message as string}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                            <input
                                id="email"
                                {...register("email")}
                                type="email"
                                className="w-full px-4 py-2 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message as string}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
                            <input
                                id="password"
                                {...register("password")}
                                type="password"
                                className="w-full px-4 py-2 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message as string}</p>}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md focus:outline-none"
                        >
                            {isLoading ? "Signing up ..." : "Sign up"}
                        </button>
                    </div>

                    <div className='mt-2'>
                        <p> Have account? <Link className='text-blue-500' href="/auth/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm

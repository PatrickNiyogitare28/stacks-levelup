import { AxiosError, AxiosResponse } from "axios";

export interface CustomError extends Error {
    axiosError: AxiosError;
    response: {
        data: {
            message: string;
        }
    };
  }

export interface CustomResponse extends Response {
    data: AxiosResponse;
    accessToken?: string;
    refreshToken?: string;
    message: string;
}  
import { isBrowser } from '.'

export const storage = {
    getAccessToken: () => {
        if (!isBrowser) return
        if (localStorage.getItem('todo_token') !== null)
            return localStorage.getItem('todo_token')
    },
    setAccessToken: (token: string) => {
        localStorage.setItem('todo_token', token)
    },
    getRefreshToken: () => {
        if (!isBrowser) return
        if (localStorage.getItem('todo_refreshToken') !== null)
            return localStorage.getItem('todo_refreshToken')
    },
    setRefreshToken: (token: string) => {
        localStorage.setItem('todo_refreshToken', token)
    },
    clear: () => {
        if (!isBrowser) return
        localStorage.removeItem('todo_token')
        localStorage.removeItem('todo_refreshToken')
    }
}

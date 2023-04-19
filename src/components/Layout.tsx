import React, { ReactNode } from 'react';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/router';
import { storage } from '@/utils/frontend/storage';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const handleLogout = () => {
    axiosInstance.get('/auth/logout');
    storage.clear();
    router.replace('/auth/login')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-200 p-4">
      <button
        onClick={handleLogout}
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md focus:outline-none"
            >
            Logout
      </button>
      </nav>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-200 p-4 text-black">
        <p>Made by &lt;3</p>
      </footer>
    </div>
  );
};

export default Layout;


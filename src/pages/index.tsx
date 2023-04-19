import React from 'react';
import { GetServerSideProps } from 'next';
import TodoList from '@/components/TodoList';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
     <TodoList />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

import React from 'react';
import Todo from './todo';
import { GetServerSideProps } from 'next';

export default function Home() {
  return (
   <Todo />
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

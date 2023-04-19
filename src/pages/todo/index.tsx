import Layout from '@/components/Layout';
import TodoList from '@/components/TodoList';
import { GetServerSideProps } from 'next';

export default function Todo(){
    return (
        <Layout>
            <TodoList />
        </Layout>
    );
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
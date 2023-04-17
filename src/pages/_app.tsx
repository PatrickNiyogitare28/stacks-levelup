import "../styles/globals.css";
import type { AppProps } from "next/app";
import { withUrqlClient } from "next-urql";
import { cacheExchange, fetchExchange } from '@urql/core';


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withUrqlClient((ssrExchange) => ({
  url: 'https://valid-bear-13.hasura.app/v1/graphql' as string,
  fetchOptions: {
    headers: {
      'x-hasura-admin-secret': 'A5vK7rSySnHvoPlDWgdLtRB2TwlTEhd996Ecn3bC4PYPJZ6sY0e72aQRRIK4AvXq',
      'content-type': 'application/json'
    },
  },
  exchanges: [cacheExchange, ssrExchange, fetchExchange]
}))(App);
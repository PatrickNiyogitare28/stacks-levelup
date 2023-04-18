import { GraphQLClient } from 'graphql-request'
import { storage } from './utils/storage'

const requestHeaders = {
    Authorization: `Bearer ${storage.getAccessToken()}`,
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET as string,
    'content-type': 'application/json'
}

const graphqlRequestClient = new GraphQLClient(process.env.HASURA_PROJECT_ENDPOINT as string, {
    headers: requestHeaders
})

export default graphqlRequestClient

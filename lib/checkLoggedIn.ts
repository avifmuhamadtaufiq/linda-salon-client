import { ApolloClient, ApolloQueryResult } from 'apollo-boost'
import ME_QUERY4 from 'queries/user/meQ.graphql'
import { MeQ } from 'types/schema-types'

export default (apolloClient: ApolloClient<any>) => (
  apolloClient.query({
    query: ME_QUERY4
  }).then(({ data } : ApolloQueryResult<MeQ>) => {
    return { loggedInUser: data as MeQ } 
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: null }
  })
)
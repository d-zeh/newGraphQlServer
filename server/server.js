import { ApolloServer} from '@apollo/server'
import { startStandaloneServer} from '@apollo/server/standalone'

const typeDefs = `
    type Query {
        greeting: String
    }
`;

const resolvers ={
    Query: {
        greeting: () => 'Hello world!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers});
const info = await startStandaloneServer(server, {listen: {port:9000}});
console.log(`server running at ${info.url}`)

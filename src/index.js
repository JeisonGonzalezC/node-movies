import {ApolloServer} from 'apollo-server';
import typeDefs  from './graphql/schema';
import resolvers  from './graphql/resolvers';
import dotenv from 'dotenv';
dotenv.config();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

//Init Server
server.listen().then(({url})=>{
    console.info(`Servidor listo en la URL ${url}`);
});
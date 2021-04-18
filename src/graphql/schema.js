const {  gql } = require('apollo-server');

// Schema
const typeDefs = gql`
    #MODELS
    type GenresDetail {
        id: Int!
        name: String!
    }
    
    type Movie {
        id: Int!
        title: String!
        release_date: String
        backdrop_path: String
        actors: [String!]
        genres: [GenresDetail!]
    }

    type  Movies {
        movies: [Movie!]!
        page: Int!
    }

    type Query {
        getMoviesByPage(page: Int!) : Movies!
        getMoviesById(id: Int!) : Movie!
        getActorsMoviesById(id: Int!) : [String!]!
    }

    type Mutation {
        test : String
    }
`;

module.exports = typeDefs;
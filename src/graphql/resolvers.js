import { getMoviesByIdLib, getMoviesByPageLib } from "../lib/api_tmdb";

// Resolvers
const resolvers = {
    Query: {
        getMoviesByPage: async (_, args, _ctx) => {
            try {
                const response = await getMoviesByPageLib(args.page);
                return {
                    movies: response.movies,
                    page:   response.page
                }
            } catch (error) {
                console.error(error);
            }
        },
        getMoviesById: async (_, args, _ctx) => {
            try {
                const response = await getMoviesByIdLib(args.id);
                return response;
            } catch (error) {
                console.error(error);
            }
        },
    }, 
    Mutation: {
        test: async (_, _args ) => {
            return 'test';
        }
    }
}

export default resolvers;
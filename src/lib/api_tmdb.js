const axios = require('axios').default;

export async function getMoviesByPageLib (page) {
    try {
        const response = await axios.get(`${process.env.APIPATH}/3/discover/movie?api_key=${process.env.APIKEY}&page=${page}`);
        return {
            movies: response.data.results,
            page: response.data.page
        };
      } catch (error) {
        console.error(error);
    }
};

export async function getMoviesByIdLib (id) {
    try {
        const actors = await getActorsMoviesByIdLib(id);
        const responseActor = actors && actors.cast && actors.cast.length > 0
            ?  actors.cast.map(i => i.name)
            : [''];
        const response = await axios.get(`${process.env.APIPATH}/3/movie/${id}?api_key=${process.env.APIKEY}`);
        let result = response.data;
        result.actors = responseActor;
        return result;
      } catch (error) {
        console.error(error);
    }
};

export async function getActorsMoviesByIdLib (id) {
    try {
        const response = await axios.get(`${process.env.APIPATH}/3/movie/${id}/credits?api_key=${process.env.APIKEY}`);
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

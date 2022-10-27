const getData = async (url, params) => {
    try {
      return await axios.get(url, params);
    } catch (error) {
      console.log(error)
    }
  };

const Movie1 = async () => {
   const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
        query: "Fast and Furious 9",
      }
    });
  
}


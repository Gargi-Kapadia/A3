const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error)
  }
};

get.addEventListener('click', async (event) => {
  selectElement = document.querySelector('#Movies');
  output = selectElement.options[selectElement.selectedIndex].value;
  if (output == 'FF9') {
    const moveData = await getMovies1();
    console.log(moveData)
    callMovies(moveData)
  }
  if (output == 'Black Widow') {
    const moveData = await getMovies2();
    console.log(moveData)
    callMovies(moveData)
  }
  if (output == 'Spider Man: No Way Home') {
    const moveData = await getMovies3();
    console.log(moveData)
    callMovies(moveData)
  }
  if (output == 'Minions: The Rise of Gru') {
    const moveData = await getMovies4();
    console.log(moveData)
    callMovies(moveData)
  }
  if (output == 'Red Notice') {
    const moveData = await getMovies5();
    console.log(moveData)
    callMovies(moveData)
  }
  if (output == 'Crazy Rich Asians') {
    const moveData = await getMovies6();
    console.log(moveData)
    callMovies(moveData)
  }
  if (output == 'Hustle') {
    const moveData = await getMovies7();
    console.log(moveData)
    callMovies(moveData)
  }
  if (output == 'Home Alone: Lost in New York') {
    const moveData = await getMovies8();
    console.log(moveData)
    callMovies(moveData)
  }
  if (output == 'Black Panther') {
    const moveData = await getMovies9();
    console.log(moveData)
    callMovies(moveData)
  }
  if (output == 'Cool Runnings') {
    const moveData = await getMovies10();
    console.log(moveData)
    callMovies(moveData)
  }
});

function callMovies(movieData) {
document.getElementById('div1').innerHTML = "";
const style = document.createElement('style')
document.head.appendChild(style)

const runtime = document.createElement("p")
runtime.innerHTML = 'Runtime:' + movieData['runtime']
document.getElementsByClassName('run');
document.getElementById('div1').appendChild(runtime); 
 
const overview = document.createElement("p");
overview.innerHTML = '<b>Overview: </b>' + movieData['overview'];
document.getElementById('div1').appendChild(overview);
  
const img = document.createElement("img");
img.src = 'https://image.tmdb.org/t/p/w500' + movieData['poster_path'];
document.getElementById('div1').appendChild(img);
  
const release_date = document.createElement("p");
release_date.innerHTML = 'Release Date:' + movieData['release_date'];
document.getElementById('div1').appendChild(release_date);
  
const original_title = document.createElement("h1")
original_title.innerHTML = movieData['original_title']
document.getElementById('div1').appendChild(original_title);
  //console.log(movieData['poster_path']);
  //console.log(movieData.genres);

let genres = genre(movieData['genres']);
console.log(genres);
const callgenres = document.createElement("p");
callgenres.innerHTML = '<b>Genres: </b>' + genres;
document.getElementById('div1').appendChild(callgenres);
 
  //const trailer = document.createElement('iframe')
  //trailer.innerHTML = movieData['videos[0]']
  //trailer.src = 'https://www.youtube.com/embed/' + movieData['key'] 
  //document.getElementById('div1').appendChild(trailer);

const revenue = document.createElement('p')
revenue.innerHTML = 'Revenue:' + movieData['revenue'] + ' $ USD '
document.getElementById('div1').appendChild(revenue);

const tagline = document.createElement('h2')
tagline.innerHTML =  movieData['tagline'] 
document.getElementById('div1').appendChild(tagline);

const popularity = document.createElement('p')
popularity.innerHTML = '<br>Popularity</br>' + movieData['popularity'] 
document.getElementById('div1').appendChild(popularity);

const vote_average = document.createElement('p')
vote_average.innerHTML = '<br>Vote Average</br>' + movieData['vote_average'] 
document.getElementById('div1').appendChild(vote_average);

const vote_count = document.createElement('p')
vote_count.innerHTML = '<br>Vote Count</br>' + movieData['vote_count'] 
document.getElementById('div1').appendChild(vote_count);

}

function genre(genresArray) {
  let callgenres = ""
  for (i=0 ; i < genresArray.length; i++) {
    let genre = genres[genresArray[i].id]
    callgenres = callgenres + (genre + ', ')
  }
  let result = callgenres.slice(0, callgenres.length - 2) 
  return result
}


const getMovies1 = async () => {
const movieData = await getData("https://api.themoviedb.org/3/movie/384018", {
  params: {
    api_key: "354ab13223b58e3243b70a0085da1b2e",
    query: "Fast & Furious Presents: Hobbs & Shaw",
    append_to_response: "videos",
  }
  
});
return movieData.data;

}


const getMovies2 = async () => {
const movieData = await getData("https://api.themoviedb.org/3/movie/497698", {
params: {
  api_key: "354ab13223b58e3243b70a0085da1b2e",
  query: "Black Widow",
  append_to_response: "videos",
 }
      
});
 return movieData.data;   
}  

const getMovies3 = async () => {
const movieData = await getData("https://api.themoviedb.org/3/movie/634649", {
      params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
        query: "Spider Man: No Way Home",
        append_to_response: "videos",
      }
      
    });
    return movieData.data;

  }   
  const getMovies4 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/438148", {
      params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
        query: "Minions: The Rise of Gru",
        append_to_response: "videos",
      }
      
    });
    return movieData.data;
  
  }   
  const getMovies5 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/512195", {
      params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
        query: "Red Notice",
        append_to_response: "videos",
      }
      
    });
    return movieData.data;
  
  }   
  const getMovies6 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/455207", {
      params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
        query: "Crazy Rich Asians",
        append_to_response: "videos",
      }
      
    });
    return movieData.data;
  
  }   
  const getMovies7 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/705861", {
      params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
        query: "Hustle",
        append_to_response: "videos",
      }
      
    });
    return movieData.data;
  
  }   
  const getMovies8 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/772", {
      params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
        query: "Home Alone: Lost in New York",
        append_to_response: "videos",
      }
      
    });
    return movieData.data;
  
  }   
  const getMovies9 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/284054", {
      params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
        query: "Black Panther",
        append_to_response: "videos",

      }
      
    });
    return movieData.data;
  
  }   
  const getMovies10 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/864", {
      params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
        query: "Cool Runnings",
        append_to_response: "videos",
      }
      
    });
    return movieData.data;
  
  }  
  
   const genres = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animantion',
    35: 'Comedy',
    80: 'Crime',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    9648:'Mystery',
    10749:'Romance',
  };

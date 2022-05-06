let api = "api_key=a4880995fbb07d40249df7d0c03c8383";

let base_url = "https://api.themoviedb.org/3";

let final_url =
  base_url + "/discover/movie?sort_by=popularity.description&" + api;

let img_url = "https://image.tmdb.org/t/p/original";

let requests = {
  fetchpopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.description&${api}`,
  fetchtrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
};

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())
  .then((data) =>
    affichescreen(
      data.results[Math.floor(Math.random() * data.results.length - 1)]
    )
  );

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
fetch(requests.fetchDocumentaries)
  .then((res) => res.json())
  .then((data) => {
    let lines = document.getElementById("lines");
    let line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    let title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Documentaries";
    line.appendChild(title);
    let line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      let poster = document.createElement("img");
      poster.className = "line__poster";
      var stock = movie.id;
      poster.id = stock;
      poster.src = img_url + movie.backdrop_path;
      poster.addEventListener("click", function () {
        affichescreen(movie);
      });
      line_posters.appendChild(poster);
    });
  });
function affichescreen(movie) {
  let setMovie = movie;
  console.log(setMovie);
  var screen = document.getElementById("screen");
  var screen_title = document.getElementById("screen__title");
  var screen__description = document.getElementById("screen__description");

  screen.style.backgroundImage =
    "url(" + img_url + setMovie.backdrop_path + ")";
  screen__description.innerText = truncate(setMovie.overview, 150);

  screen_title.innerText = setMovie.name || setMovie.title;
  window.scrollTo(0, 0);
}

fetch(requests.NetflixOrignals)
  .then((res) => res.json())
  .then((data) => {
    let lines = document.getElementById("lines");
    let line = document.createElement("div");
    line.className = "line";
    line.classList.add("netflixline");
    lines.appendChild(line);
    let title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "NETFLIX ORIGINALS";
    line.appendChild(title);
    let line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      let poster = document.createElement("img");
      poster.className = "line__posterLarge";
      var s = movie.name.replace(/\s+/g, "");
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      poster.addEventListener("click", function () {
        affichescreen(movie);
      });
      line_posters.appendChild(poster);
    });
  });

fetch(requests.fetchpopular)
  .then((res) => res.json())
  .then((data) => {
    let lines = document.getElementById("lines");
    let line = document.createElement("div");
    line.className = "line";
    line.classList.add("popularline");
    lines.appendChild(line);
    let title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Trending Now";
    line.appendChild(title);
    let line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      let poster = document.createElement("img");
      poster.className = "line__posterLarge";
      var stock = movie.id;
      poster.id = stock;
      poster.src = img_url + movie.poster_path;
      poster.addEventListener("click", function () {
        affichescreen(movie);
      });
      line_posters.appendChild(poster);
    });
  });

fetch(requests.fecthtrending)
  .then((res) => res.json())
  .then((data) => {
    let lines = document.getElementById("lines");
    let line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    let title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Top Rated";
    line.appendChild(title);
    let line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      let poster = document.createElement("img");
      poster.className = "line__posterLarge";
      var stock = movie.id;
      poster.id = stock;
      poster.src = img_url + movie.poster_path;
      poster.addEventListener("click", function () {
        affichescreen(movie);
      });
      line_posters.appendChild(poster);
    });
  });

fetch(requests.fetchActionMovies)
  .then((res) => res.json())
  .then((data) => {
    let lines = document.getElementById("lines");
    let line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    let title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Action Movies";
    line.appendChild(title);
    let line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      let poster = document.createElement("img");
      poster.className = "line__poster";
      var stock = movie.id;
      poster.id = stock;
      poster.src = img_url + movie.backdrop_path;
      poster.addEventListener("click", function () {
        affichescreen(movie);
      });
      line_posters.appendChild(poster);
    });
  });

fetch(requests.fetchComedyMovies)
  .then((res) => res.json())
  .then((data) => {
    let lines = document.getElementById("lines");
    let line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    let title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Comedy Movies";
    line.appendChild(title);
    let line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      let poster = document.createElement("img");
      poster.className = "line__poster";
      var stock = movie.id;
      poster.id = stock;
      poster.src = img_url + movie.backdrop_path;
      poster.addEventListener("click", function () {
        affichescreen(movie);
      });
      line_posters.appendChild(poster);
    });
  });

fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())
  .then((data) => {
    let lines = document.getElementById("lines");
    let line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    let title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Horror Movies";
    line.appendChild(title);
    let line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      let poster = document.createElement("img");
      poster.className = "line__poster";
      var stock = movie.id;
      poster.id = stock;
      poster.src = img_url + movie.backdrop_path;
      poster.addEventListener("click", function () {
        affichescreen(movie);
      });
      line_posters.appendChild(poster);
    });
  });

fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())
  .then((data) => {
    let lines = document.getElementById("lines");
    let line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    let title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Romance Movies";
    line.appendChild(title);
    let line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      let poster = document.createElement("img");
      poster.className = "line__poster";
      var stock = movie.id;
      poster.id = stock;
      poster.src = img_url + movie.backdrop_path;
      poster.addEventListener("click", function () {
        affichescreen(movie);
      });
      line_posters.appendChild(poster);
    });
  });

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("active", window.scrollY > 0);
});

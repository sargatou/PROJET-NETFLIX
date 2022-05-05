let api = "api_key=a4880995fbb07d40249df7d0c03c8383";
let api_url = "https://api.themoviedb.org/3";
let final_url = api_url + "/discover/movie?sort_by=popularity.desc&" + api;
let img_url = "https://image.tmdb.org/t/p/original";

let Movies = {
  fetchPopular: `${api_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${api_url}/trending/all/week?${api}&language=en-US`,
  fetchOrignals: `${api_url}/discover/tv?${api}&with_networks=213`,
  fetchAction: `${api_url}/discover/movie?${api}&with_genres=28`,
  fetchComedy: `${api_url}/discover/movie?${api}&with_genres=35`,
  fetchHorror: `${api_url}/discover/movie?${api}&with_genres=27`,
  fetchRomance: `${api_url}/discover/movie?${api}&with_genres=35`,
  fetchDocumentaries: `${api_url}/discover/movie?${api}&with_genres=27`,
};

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(Movies.fetchOrignals)
  .then((res) => res.json())
  .then((data) =>
    affichescreen(
      data.results[Math.floor(Math.random() * data.results.length - 1)]
    )
  );

function affichescreen(movie) {
  const pickfilm = movie;
  console.log(pickfilm);
  var screen = document.getElementById("screen");
  var screen_title = document.getElementById("screen__title");
  var screen__desc = document.getElementById("screen__description");

  screen.style.backgroundImage =
    "url(" + img_url + pickfilm.backdrop_path + ")";
  screen__desc.innerText = truncate(pickfilm.overview, 150);

  screen_title.innerText = pickfilm.name || pickfilm.title;
  window.scrollTo(0, 0);
}
fetch(Movies.fetchOrignals)
  .then((res) => res.json())
  .then((data) => {
    const lines = document.getElementById("lines");
    const line = document.createElement("div");
    line.className = "line";
    line.classList.add("netflixline");
    lines.appendChild(line);
    const title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "ORIGINALS";
    line.appendChild(title);
    const line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
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

fetch(Movies.fetchPopular)
  .then((res) => res.json())
  .then((data) => {
    const lines = document.getElementById("lines");
    const line = document.createElement("div");
    line.className = "line";
    line.classList.add("popularline");
    lines.appendChild(line);
    const title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Trending";
    line.appendChild(title);
    const line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
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

fetch(Movies.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    const lines = document.getElementById("lines");
    const line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    const title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Top-Rated";
    line.appendChild(title);
    const line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
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

fetch(Movies.fetchActionMovies)
  .then((res) => res.json())
  .then((data) => {
    const lines = document.getElementById("lines");
    const line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    const title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Actions";
    line.appendChild(title);
    const line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
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

fetch(Movies.fetchComedyMovies)
  .then((res) => res.json())
  .then((data) => {
    const lines = document.getElementById("lines");
    const line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    const title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Comedy";
    line.appendChild(title);
    const line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
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

fetch(Movies.fetchHorrorMovies)
  .then((res) => res.json())
  .then((data) => {
    const lines = document.getElementById("lines");
    const line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    const title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Horrors";
    line.appendChild(title);
    const line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
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

fetch(Movies.fetchRomanceMovies)
  .then((res) => res.json())
  .then((data) => {
    const lines = document.getElementById("lines");
    const line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    const title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Romances";
    line.appendChild(title);
    const line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
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

fetch(Movies.fetchDocumentaries)
  .then((res) => res.json())
  .then((data) => {
    const lines = document.getElementById("lines");
    const line = document.createElement("div");
    line.className = "line";
    lines.appendChild(line);
    const title = document.createElement("h2");
    title.className = "line__title";
    title.innerText = "Documentaries";
    line.appendChild(title);
    const line_posters = document.createElement("div");
    line_posters.className = "line__posters";
    line.appendChild(line_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
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

const movieNode = document.querySelector('.movie__content');

const params = new URLSearchParams(location.search);
const id = params.get('i');

fetch(`https://www.omdbapi.com/?i=${id}&apikey=713687dc`)
    .then(response => response.json())
    .then(res => {
        console.log(res);

        return (movieNode.innerHTML = `
            <div class="movie__card">
            <img class="movie__poster" src="${res.Poster}" alt="Movie Poster">
            <div class="movie__text">
                <h1 class="movie__title">${res.Title}</h1>
                <ul class="movie__data-wrapper">
                    <li class="movie__data">Year: <span>${res.Year}</span></li>
                    <li class="movie__data">Rated: <span>${res.Rated}</span></li>
                    <li class="movie__data">Released выхода: <span>${res.Released}</span></li>
                    <li class="movie__data">Runtime: <span>${res.Runtime}</span></li>
                    <li class="movie__data">Genre: <span>${res.Genre}</span></li>
                    <li class="movie__data">Director: <span>${res.Director}</span></li>
                    <li class="movie__data">Writer: <span>${res.Writer}</span></li>
                    <li class="movie__data">Actors: <span>${res.Actors}</span></li>
                </ul>
            </div>
            </div>
            <div class="movie__plot-wrapper">
                <p class="movie__data">${res.Plot}</p>
            </div>
            `)
    })

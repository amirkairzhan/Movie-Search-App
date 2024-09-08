const inputNode = document.querySelector('.search__input');
const buttonNode = document.querySelector('.search__btn');
const moviesNode = document.querySelector('.movies__section');
const movieNode = document.querySelector('.movie');

moviesNode.innerHTML = '';


buttonNode.addEventListener('click', function () {
    const inputValue = inputNode.value;

    fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=713687dc`)
        .then(response => response.json())
        .then(json => {
            let moviesList = json.Search;

            if (inputValue === '') {
                return moviesNode.innerHTML = `<li class="error">Enter movie name</li>`
            }

            if (json.Response === 'False') {
                return moviesNode.innerHTML = `<li class="error">No movie found</li>`
            }

            moviesNode.innerHTML = '';

            return moviesList.map((movie) => {
                let li = createNode('li');
                let poster = createNode('img');
                let text = createNode('div');
                let title = createNode('p');
                let year = createNode('p');
                let type = createNode('p');

                li.onclick = function () {
                    movieInformation(movie);
                };
                li.classList.add('movie');
                poster.classList.add('movie__poster');
                text.classList.add('movie__text');
                title.classList.add('movie__title');
                year.classList.add('movie__year');
                type.classList.add('movie__type');

                poster.src = movie.Poster;
                title.innerHTML = movie.Title;
                year.innerHTML = movie.Year;
                type.innerHTML = movie.Type;

                appendNode(li, poster);
                appendNode(li, text);
                appendNode(text, title);
                appendNode(text, year);
                appendNode(text, type);
                appendNode(moviesNode, li);
            });
        })
});

function createNode(movie) {
    return document.createElement(movie);
}

function appendNode(parent, element) {
    return parent.appendChild(element);
}

function movieInformation(movie) {
    return location.href=`movie.html?i=${movie.imdbID}`
}

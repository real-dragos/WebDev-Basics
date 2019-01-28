let movies = []

function addSomeMovies() {
    movies.push({
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    });
    movies.push({
        title: "Fight Club",
        rating: 4,
        hasWatched: true
    });
    movies.push({
        title: "Dr. Strange",
        rating: 4,
        hasWatched: false
    });
    movies.push({
        title: "Life is Beautiful",
        rating: 5,
        hasWatched: true
    });
}

function buildString(movie){
    let str = ""
    if (movie.hasWatched) {
        str += "You have watched "
    } else {
        str += "You have not seen "
    }
    str += "\"" + movie.title + "\""
    str += " - " + movie.rating + " stars"
    return str;
}

function printAllMovies() {
    movies.forEach(function (movie) {
        console.log(buildString(movie));
    })
}
function main(){
    addSomeMovies();
    printAllMovies();
}

main()
import Movie from './models/movie'

interface IData {
    movies: Movie[]
    totalMoviesLength: number
}

const data: IData = {
    movies: [],
    totalMoviesLength: 0,
}

function calculateTotalLength(): void {
    let total = 0

    // Iterate trough movies and calculate length
    data.movies.forEach(function (currentMovie) {
        total += currentMovie.length
    })

    // Set our new total to our data object
    data.totalMoviesLength = total
}

// Functions to be exported to public
export function addMovie(
    title: string = 'unknown',
    length: number,
    genre: string = 'unknown'
): Movie {
    // const movie = new Movie(title, parseFloat(length), genre)
    const movie = new Movie({
        length,
        title,
        genre,
    })

    data.movies.push(movie)

    return movie
}

export function getTotalLength() {
    // calculate total data before returning
    calculateTotalLength()

    return data.totalMoviesLength
}

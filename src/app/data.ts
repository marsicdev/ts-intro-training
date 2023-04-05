// import Film from '../models/Movie'
import { Movie } from '../models/Movie'

type TDataStore = {
    movies: Movie[]
    totalMoviesLength: number
}

const data: TDataStore = {
    movies: [],
    totalMoviesLength: 0,
}

function calculateTotalLength(): void {
    let total = 0

    // Iterate trough movies and calculate length
    data.movies.forEach((currentMovie) => {
        total += currentMovie.length
    })

    // Set our new total to our data object
    data.totalMoviesLength = total
}

// Functions to be exported to public
export function addMovie(title = 'unknown', length = '0', genre = 'unknown'): Movie {
    // const movie = new Movie(title, parseFloat(length), genre)
    const movie = new Movie({
        title,
        genre,
        length: Number.parseInt(length),
    })

    data.movies.push(movie)

    return movie
}

export function getTotalLength() {
    // calculate total data before returning
    calculateTotalLength()

    return data.totalMoviesLength
}

type RandomUser = {
    gender: 'male' | 'female' | 'other'
}

type RandomResponse = {
    results: RandomUser[]
    info: any
}

export const fetchRandom = async (): Promise<any> => {
    try {
        const res = await fetch('https://api.randomuser.me')
        const data: RandomResponse = await res.json()

        return data.results[0].gender
    } catch (error) {}
}

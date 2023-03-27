interface IMovieParams {
    title: string
    genre: string
    length: number
}

class Movie {
    private readonly title: string
    genre: string
    length: number

    constructor(movieObj: IMovieParams) {
        const { title = 'n/a', length, genre } = movieObj

        // this.title = movieObj.title
        this.title = title
        this.length = length
        this.genre = genre
    }

    getInfo(): string {
        return `${this.title}, duration: ${this.length}min, genre:
    ${this.getGenreAbbreviation(this.genre)}`
    }

    getGenreAbbreviation(genreStr = 'n/a'): string {
        // genreStr = genreStr || 'n/a'

        const firstIndex = 0
        const lastIndex = genreStr.length - 1
        const output = genreStr.charAt(firstIndex) + genreStr.charAt(lastIndex)
        return output.toUpperCase()
    }

    get info() {
        return `${this.title} / ${this.genre}`
    }
}

export default Movie

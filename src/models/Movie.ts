import { TFormData } from '../types'

export class Movie {
    readonly title: string
    readonly length: number
    readonly genre: string

    constructor(formData: TFormData) {
        const { title = 'n/a', length = 0, genre = 'n/a' } = formData

        // this.title = movieObj.title
        this.title = title
        this.length = length
        this.genre = genre
    }

    getInfo(): string {
        return `${this.title}, duration: ${this.length}min, genre:
    ${this.getGenreAbbreviation(this.genre)}`
    }

    getGenreAbbreviation(genreStr = 'n/a') {
        // genreStr = genreStr || 'n/a'

        const firstIndex = 0
        const lastIndex = genreStr.length - 1
        const output = genreStr.charAt(firstIndex) + genreStr.charAt(lastIndex)
        return output.toUpperCase()
    }
}

export default Movie

import Movie from '../models/Movie'
import { TFormData } from '../types'

const DOMSelectors = {
    titleInput: '.movie-title',
    lengthInput: '.movie-length',
    genreSelect: '.genre-select',
    movieListUl: '.movie-list ul',
    errorDiv: '.movie-error',
    addMovieButton: '.create-movie',
    formElement: 'form',
    totalLengthSpan: '.total-length span',
} as const

function collectFormData(): TFormData {
    const titleElement = document.querySelector<HTMLInputElement>(DOMSelectors.titleInput)
    const lengthElement = document.querySelector<HTMLInputElement>(
        DOMSelectors.lengthInput
    )
    const genreSelectElement = document.querySelector<HTMLSelectElement>(
        DOMSelectors.genreSelect
    )

    const result = {
        title: titleElement!.value,
        length: Number.parseInt(lengthElement!.value),
        genre: genreSelectElement!.value,
    }

    return result
}

function displayListItem(movie: Movie) {
    const listEl = document.querySelector<HTMLUListElement>(DOMSelectors.movieListUl)

    const htmlItem = `<li>${movie.getInfo()}</li>`

    listEl!.insertAdjacentHTML('beforeend', htmlItem)
}

function clearInputs() {
    // Reset forma data
    document.querySelector<HTMLFormElement>(DOMSelectors.formElement)!.reset()

    // Reset error if any
    document.querySelector<HTMLDivElement>(DOMSelectors.errorDiv)!.textContent = ''

    // Set focus to title input
    document.querySelector<HTMLInputElement>(DOMSelectors.titleInput)?.focus()
}

function displayError(input: TFormData) {
    let errorMsg = 'Unknown error!'

    if (!input.title) {
        errorMsg = 'Enter title!'
    } else if (!input.length) {
        errorMsg = 'Enter length!'
    } else if (!input.genre) {
        errorMsg = 'Select genre!'
    }

    document.querySelector<HTMLDivElement>(DOMSelectors.errorDiv)!.textContent = errorMsg
}

function displayTotalLength(tLength: string) {
    // If length is not passed set default value

    document.querySelector(DOMSelectors.totalLengthSpan)!.textContent = tLength ?? '-'
}

type CreateAction = 'click' | 'keydown'
type OnClickFn = () => void

export const setOnCreateMovieListener = (action: CreateAction, onClick: OnClickFn) => {
    document
        .querySelector(DOMSelectors.addMovieButton)!
        .addEventListener(action, (event) => {
            if (action === 'keydown' && event instanceof KeyboardEvent) {
                if (event.key === 'Enter') {
                    onClick()
                }
                return
            }

            onClick()
        })
}

export const displayRandom = (random: string) => {
    document.querySelector<HTMLDivElement>(DOMSelectors.errorDiv)!.textContent = random
}

export {
    displayListItem,
    displayTotalLength,
    collectFormData as getInput,
    clearInputs,
    displayError,
}

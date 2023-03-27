import Movie from './models/movie'
import { MovieFormData } from './types'

const DOMSelectors = {
    inputTitle: '.movie-title',
    inputLength: '.movie-length',
    selectGenre: '.genre-select',
    containerMovieList: '.movie-list ul',
    containerError: '.movie-error',
    buttonAddMovie: '.create-movie',
    formElement: 'form',
    containerTotalLength: '.total-length span',
}

function getInput(): MovieFormData {
    const { inputTitle, inputLength, selectGenre } = DOMSelectors

    const titleElement = document.querySelector<HTMLInputElement>(inputTitle)
    const lengthElement = document.querySelector<HTMLInputElement>(inputLength)
    const genreSelectElement = document.querySelector<HTMLSelectElement>(selectGenre)

    const result = {
        title: titleElement?.value,
        length: Number.parseInt(lengthElement?.value || '0'),
        genre: genreSelectElement?.value,
    }

    return result
}

function displayListItem(movie: Movie) {
    const listEl = document.querySelector(DOMSelectors.containerMovieList)

    const htmlItem = `<li> ${movie.getInfo()}</li>`

    listEl?.insertAdjacentHTML('beforeend', htmlItem)
}

function clearInputs() {
    // Reset forma data
    document.querySelector<HTMLFormElement>(DOMSelectors.formElement)?.reset()

    // Reset error if any
    const errElem = document.querySelector<HTMLDivElement>(DOMSelectors.containerError)
    if (errElem) {
        errElem.textContent = ''
    }

    // Set focus to title input
    document.querySelector<HTMLInputElement>(DOMSelectors.inputTitle)?.focus()
}

function displayError(input: MovieFormData) {
    let errorMsg = 'Unknown error!'

    if (!input.title) {
        errorMsg = 'Enter title!'
    } else if (!input.length) {
        errorMsg = 'Enter length!'
    } else if (!input.genre) {
        errorMsg = 'Select genre!'
    }

    const errElem = document.querySelector<HTMLDivElement>(DOMSelectors.containerError)
    if (errElem) {
        errElem.textContent = errorMsg
    }
}

function displayTotalLength(totalLength: number | string = '-') {
    const errElem = document.querySelector<HTMLDivElement>(
        DOMSelectors.containerTotalLength
    )
    if (errElem) {
        errElem.textContent = `${totalLength}`
    }
}

function getDOMStrings() {
    return DOMSelectors
}

export {
    displayListItem,
    displayTotalLength,
    getDOMStrings,
    getInput,
    clearInputs,
    displayError,
}

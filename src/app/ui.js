const DOMSelectors = {
    titleInput: '.movie-title',
    lengthInput: '.movie-length',
    genreSelect: '.genre-select',
    movieListUl: '.movie-list ul',
    errorDiv: '.movie-error',
    addMovieButton: '.create-movie',
    formElement: 'form',
    totalLengthSpan: '.total-length span',
}

function getInput() {
    const titleElement = document.querySelector(DOMSelectors.titleInput)
    const lengthElement = document.querySelector(DOMSelectors.lengthInput)
    const genreSelectElement = document.querySelector(DOMSelectors.genreSelect)

    const result = {
        title: titleElement.value,
        length: lengthElement.value,
        genre: genreSelectElement.value,
    }

    return result
}

function displayListItem(movie) {
    const listEl = document.querySelector(DOMSelectors.movieListUl)

    const htmlItem = '<li>' + movie.getInfo() + '</li>'

    listEl.insertAdjacentHTML('beforeend', htmlItem)
}

function clearInputs() {
    // Reset forma data
    document.querySelector(DOMSelectors.formElement).reset()

    // Reset error if any
    document.querySelector(DOMSelectors.errorDiv).textContent = ''

    // Set focus to title input
    document.querySelector(DOMSelectors.titleInput).focus()
}

function displayError(input) {
    let errorMsg = 'Unknown error!'

    if (!input.title) {
        errorMsg = 'Enter title!'
    } else if (!input.length) {
        errorMsg = 'Enter length!'
    } else if (!input.genre) {
        errorMsg = 'Select genre!'
    }

    document.querySelector(DOMSelectors.errorDiv).textContent = errorMsg
}

function displayTotalLength(tLength) {
    // If length is not passed set default value
    tLength = tLength || '-'

    document.querySelector(DOMSelectors.totalLengthSpan).textContent = String(tLength)
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

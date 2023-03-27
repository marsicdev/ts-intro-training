import * as data from './data'
import * as ui from './ui'

function setupEventListeners() {
    const DOM = ui.getDOMStrings()

    document
        .querySelector(DOM.buttonAddMovie)
        ?.addEventListener('click', ctrlAddMovieItem)

    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            ctrlAddMovieItem()
        }
    })
}

function ctrlUpdateTotalLength() {
    // 1. Get calculated length
    const totalLength = data.getTotalLength()

    // 2. Update the UI with new total length
    ui.displayTotalLength(totalLength)
}

const ctrlAddMovieItem = () => {
    // 1. get form data (UI)
    const input = ui.getInput()
    const { title, length, genre } = input
    // const title = input.title
    // const length = input.length
    // const  genre = input.genre

    // console.log(input);

    // 1.1 Validate data validity
    if (!title || !length || !genre) {
        // throw new Error('Something bad happened');
        // alert("Error!")
        ui.displayError(input)
        return
    }

    // 2. Add movie to list
    const movie = data.addMovie(title, length, genre)
    // console.log(movie);

    // 3. Clear form inputs
    ui.clearInputs()

    // 4. show list on UI
    ui.displayListItem(movie)

    // 5. Update total length UI
    ctrlUpdateTotalLength()
}

export const init = () => {
    console.log('App has started')
    setupEventListeners()
}

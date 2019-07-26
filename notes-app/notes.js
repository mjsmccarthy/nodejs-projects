const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your notes...';
}

/**
 * Adds a new note to a file called notes.json. If the title for
 * the note is already in the file, nothing new is added. 
 * @param {string} title - Title of the note
 * @param {string} body  - Body message associated with the note
 */
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

/**
 * Removes a given note based on the title passed to the function.
 * @param {string} title 
 */
const removeNote = (title) => {
    const notes = loadNotes()
    var index = notes.findIndex((note) => {
        return note.title === title
    })

    if (index !== -1) {
        notes.splice(index, 1)  // Remove note from array
        saveNotes(notes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}
/**
 * Prints out all notes currently available. If no notes are available, 
 * nothing will be printed to the console.
 */
const listNotes = () => {
    console.log(chalk.green.inverse("Your notes..."))
    const notes = loadNotes()

    for (var i = 0; i < notes.length; i++) {
        console.log('   ' + (i + 1) + ') ' + notes[i].title)
    }
}

/**
 * Given a note title, prints the contents out to the console. If the note does
 * not exist, an error is printed.
 * @param {string} title 
 */
const readNote = (title) => {
    const notes = loadNotes()
    const noteFound = notes.find((note) => note.title === title)
    
    if (noteFound) {
        console.log(chalk.green.inverse('Title: ' + noteFound.title))
        console.log('Body: ' + noteFound.body)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes, null, 2)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your notes...';
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title 
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('Note added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    var index = notes.findIndex((note) => {
        return note.title === title
    })

    if (index !== -1) {
        notes.splice(index, 1)
        saveNotes(notes)
        console.log(chalk.green('Note removed!'))
    } else {
        console.log(chalk.red('No note with that title'))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes, null, 2)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
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
    removeNote: removeNote
}
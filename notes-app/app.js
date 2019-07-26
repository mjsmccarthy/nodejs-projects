const notes = require('./notes.js');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0')

/**
 * Adds a note via command line arguments:
 *      Ex: node app.js add -t='example' -b='example body message'
 */
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            alias: 't',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            alias: 'b',
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

/**
 * Removes a note using the command line argument 'remove'
 *      Ex: node app.js remove -t='example'
 */
yargs.command({
    command: 'remove', 
    describe: 'Remove a note',
    builder: {
        title: {
            alias: 't',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

/**
 * Command line argument to list all notes
 *      Ex: node app.js list
 */
yargs.command({
    command: 'list',
    describe: 'List the note',
    handler()  {
        notes.listNotes()
    }
})

/**
 * Command line argument to read a specific note.
 *      Ex: node app.js read -t='example'
 */
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            alias: 't',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)  {
        notes.readNote(argv.title)
    }
})

if (process.argv[2] == null) {
    yargs.showHelp()
}

yargs.parse()
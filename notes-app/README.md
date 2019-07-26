# notes-app

## Getting Started

Basic application that functions as a notetaker. The main goal of this project was to imporve my skills with Javascript.

To run the application, there are four basic command line arguments that need to be passed to the program:

1) Add a note and body of text:

    ```bash
    node app.js add -t='example' -b='Example note'
    ```

2) Remove a given note:

    ```bash
    node app.js remove -t='example'
    ```

3) List notes:

    ```bash
    node app.js list
    ```

4) Find a note:

    ```bash
    node app.js read -t='example'
    ```

All notes are stored inside a `.json` for ease of use.

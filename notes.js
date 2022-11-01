//    Developer:  Cheng, Jeff
//    Date:       10/31/2022
//    Version:    1.1

const fs = require( 'fs' );
const chalk = require( 'chalk' );

const readNote = ( title ) => {
    const notes = loadNotes();

    const note = notes.find( ( note ) => note.title === title );

    if ( note )
    {
        console.log( chalk.cyan.underline( note.title ) );
        console.log( note.body );
    }
    else
    {
        console.log( chalk.red.inverse( "Note not found" ) );
    }    
}

const addNote = ( title, body ) => {
    const notes = loadNotes();   
    const dupicateNote = notes.find( ( note ) => note.title === title );

    if ( !dupicateNote )
    {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes( notes );
        console.log( chalk.green.inverse( "New note added!" ) );    
    }
    else
    {
        console.log( chalk.red.inverse( "Note title is taken!" ) );
    }
}

const removeNote = ( title ) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter( ( note ) => note.title !== title )

    if ( notes.length > notesToKeep.length )
    {
        console.log( chalk.green.inverse( "Note removed!" ) );
        saveNotes( notesToKeep );
    }
    else
    {
        console.log( chalk.red.inverse( "No note found!" ) );
    }
}

const saveNotes = ( notes ) => {
    const dataJSON = JSON.stringify( notes );
    fs.writeFileSync( 'notes.json', dataJSON );
}

const listNotes = () => {
    const notes = loadNotes();
    console.log( chalk.blue.inverse( 'Your notes' ));
    notes.forEach( ( note ) => console.log( note.title ) );
}

const loadNotes = ( ) => {
    try
    {
        const dataBuffer = fs.readFileSync( 'notes.json' );
        const dataJSON = dataBuffer.toString();
        return JSON.parse( dataJSON );    
    }
    catch ( e )
    {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
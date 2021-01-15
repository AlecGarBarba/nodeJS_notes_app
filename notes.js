const fs = require ('fs')
const chalk = require('chalk');


const addNote = (title,body)=>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=> note.title === title);
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body,
        });
        console.log(chalk.green.inverse("New note added!"))
    }else{
        console.log(chalk.red.inverse("title taken"))
    }
    

    saveNotes(notes)
}

const removeNote = (title) =>{
    const notes = loadNotes();
    const filteredNotes = notes.filter((note)=> note.title !== title);
    if( notes.length > filteredNotes.length){
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(filteredNotes);
    }else{
        console.log(chalk.red.inverse('Note not found!'));
    }
    
}



const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e){
        return [];
    }
    
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your notes...'))
    notes.forEach((note)=>console.log(note.title))
}

const readNote =(title)=>{
    const notes = loadNotes();
    const note = notes.find((note)=> note.title === title);
    if(note){
        
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse("No note found!"))
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}
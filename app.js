const yargs = require('yargs')


const notes = require('./notes.js')
//const command = yargs.argv  //el tercer valor del argumento es lo que le escribas a l comando node app.js <coso>

//customize yargs
yargs.version('1.1.0');

//add, remove, read, list;

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'The body of the title',
            type: 'string',
            demandOption: true
        }

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }

})

yargs.command({
    command: 'remove',
    describe: 'remove the  note',
    builder: {
        title: {
            describe: 'Note title',
            type:'string',
            demandOption: true
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command: 'list',
    describe: 'list the  note',
    handler(){
        notes.listNotes();
    }

})
yargs.command({
    command: 'read',
    describe: 'read the  note',
    builder: {
        title: {
            describe: 'Note title',
            type:'string',
            demandOption: true
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }

})

yargs.parse()

//console.log(yargs.argv)
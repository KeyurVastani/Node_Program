const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require("./notes")

// console.log(process.argv);
yargs.command(
    {
        command: 'add',
        discription: "add the notes",
        builder: {
            title: {
                describe: 'note title.....!!!!!',
                demandOption: true,  //title apavanu j ,jo false hoy ne to na ape to chale
                type: 'string'

            },

            body: {
                describe: 'body title.....!!!!!',
                demandOption: true,
                type: 'string'

            }
        },
        handler: function (argv) {
            notes.addNote(argv.title, argv.body)


        }
    }
)

yargs.command(
    {
        command: 'remove',
        discribe: "remove the notes",
        builder: {
            title: {
                describe: 'note title.....!!!!!',
                demandOption: true,  //title apavanu j ,jo false hoy ne to na ape to chale
                type: 'string'
            },

        },//also we define func as this type
        handler(argv) {
            notes.removeNotes(argv.title)
        }
    }
)

yargs.command(
    {
        command: 'List',
        discribe: 'List Your notes',
        handler() {
            notes.listNotes()

        }
    }
)

yargs.command(
    {
        command: 'read',
        discribe: 'Read Your notes',
        builder: {
            title: {
                describe: 'Read notes.....!!!!!',
                demandOption: true,
                type: 'string'
            }
        },

        handler(argv) {
            notes.readNotes(argv.title)

        }
    }
)



yargs.parse()
// console.log(yargs.argv);   ani jagyaa parse pan vapri saki
//this data import by yargs.js file


const chalk = require('chalk')
const fs = require('fs')


const removeNotes = (title) => {
    const Data = loadNotes()
    const stayData = Data.filter(item => {
        return item.title !== title
    })
    if (Data.length > stayData.length) {
        saveNotes(stayData)
        console.log(chalk.green.inverse("this ittle is REMOVE ", title));

    } else {
        console.log(chalk.red.inverse("no title found in Data", title));
    }


}


const addNote = (title, body) => {
    const notes = loadNotes()
    // const DuplicateNotes = notes.filter(item =>item.title === title)
    const Duplicate = notes.find(item => item.title === title)//
    debugger
    if (!Duplicate) {
        notes.push({
            title: title,
            body: body,

        })
        saveNotes(notes)
        console.log(chalk.blue.inverse("New Notes Added......"));
    } else {
        console.log(".........................Use Other Title ........................!!!!!");
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'));
    notes.forEach(item => {
        console.log(item.title);
    });
}



const readNotes = (title) => {
    const notes = loadNotes()
    const fatchNotes = notes.find(item => item.title === title)

    if (fatchNotes) {
        console.log(chalk.inverse("title", fatchNotes.title));
        console.log("Body is: ", fatchNotes.body);

    } else {
        console.log("No Notes found");

    }

}




const saveNotes = (notes) => {
    const JsonForm = JSON.stringify(notes)
    fs.writeFileSync('jsonData.json', JsonForm)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('jsonData.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return [];
    }
}

module.exports = {

    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}
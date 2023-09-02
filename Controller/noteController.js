const Note = require('../Models/notesModel')

// 1. Get all Notes
const fetchAllNotes = (req,res)=>{
    const notes = Note.find({})
    res.status(200).json({message:"Fetched all Notes", notes:notes})
}
// 2. Post New Note
const postNewNote = (req,res)=>{
    
    1. // Recieve Data for Storing into Database from Body
    const note = {
        title: req.body.title,
        body: req.body.body
    }

    // 2. Use Mongoose command to store data into MongoDB

    // mongoose command to store the data in DB
    // Command --> model.create(object)
       Note.create(note)

    // 3. Respond back to user
    res.json({message:"New Note Created", note:note})
}

// 3. Update a Note
const updateNote = (req,res)=>{
    const note = req.params.id
    res.status(200).json({message:"Note Updated", id:note})
}

// 4. Delete a Note
const deleteNote = (req,res)=>{
    const note = req.params.id
    res.status(200).json({message:"Note Deleted", id:note})
}


// 5. Fetch a Single Note
const fetchANote =  (req,res)=>{
    const note = req.params.id
    res.status(200).json({message:"Note Fetched", id:note})
}

module.exports = {
                    fetchAllNotes,
                    postNewNote, 
                    updateNote, 
                    deleteNote,
                    fetchANote
}
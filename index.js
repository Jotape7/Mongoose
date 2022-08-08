const mongoose = require('mongoose')
const connectToDatabase = require('./database')


connectToDatabase()


const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

const Kitten = mongoose.model('Kitten', kittySchema);


const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);


const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

// Schema 

// Definindo o Schema
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

// Creando o model
const Blog = mongoose.model('Blog', blogSchema);


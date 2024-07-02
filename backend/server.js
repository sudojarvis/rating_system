const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const uri ='mongodb+srv://admin:admin@cluster0.zzhl3is.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
}
);


const audiobookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    coverImage: String,
    description: String,
    rating: Number,
});

const reviewSchema = new mongoose.Schema({
    audiobookId: mongoose.Schema.Types.ObjectId,
    review: String,
    rating: Number,
    
});


const Audiobook = mongoose.model('Audiobook', audiobookSchema);
const Review = mongoose.model('Review', reviewSchema);


const audiobooks = [
    {
        title: 'The Alchemist',
        author: 'Paul Coelho',
        genre: 'Fiction',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL.jpg',
        description: 'The Alchemist follows the journey of an Andalusian',
        rating: 4.5,
    },
    {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        genre: 'Self-help',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71tcfUJdGKL.jpg',
        description: 'The Subtle Art of Not Giving a F*ck is his antidote to the coddling, lets-all-feel-good mindset that has infected modern society and spoiled a generation, rewarding them with gold medals just for showing up.',
        rating: 4.2,
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        genre: 'Mystery',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL.jpg',
        description: 'The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown.',
        rating: 4.0,
    }
];


Audiobook.insertMany(audiobooks)
.then(() => {
    console.log('Successfully saved default items to DB');
})
.catch((err) => {
    console.log(err);
});


app.get('api/audiobooks', async (req, res) => {
    try{
        const audiobooks = await Audiobook.find();
        res.json(audiobooks);
    }
    catch(err){
        console.log(err);
    }
});

app.get('api/audiobooks/:id', async (req, res) => {
    try{
        const audiobook = await Audiobook.findById(req.params.id);
        res.json(audiobook);
    }
    catch(err){
        console.log(err);
    }
});

app.post('api/reviews', async (req, res) => {
    try{
        const review = new Review({
            audiobookId: req.body.audiobookId,
            review: req.body.review,
            rating: req.body.rating,
        });
        await review.save();
        res.json(review);
    }
    catch(err){
        console.log(err);
    }
}

);

app.get('api/audiobppks/:id/reviews', async (req, res) => {
    try{
        const reviews = await Review.find({audiobookId: req.params.id});
        res.json(reviews);
    }
    catch(err){
        console.log(err);
    }
}
);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);


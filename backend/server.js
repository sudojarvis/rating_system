const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const cors = require('cors');
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

// const uri ='mongodb+srv://admin:admin@cluster0.zzhl3is.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const uri = process.env.MONGODB_URI;


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
    reviews: [
        {
            user: String,
            rating: Number,
            comment: String,
        }
    ]
});

// const reviewSchema = new mongoose.Schema({
//     audiobookId: mongoose.Schema.Types.ObjectId,
//     review: String,
//     rating: Number,
    
// });


const Audiobook = mongoose.model('Audiobook', audiobookSchema);
// const Review = mongoose.model('Review', reviewSchema);

const audiobooks = [
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        genre: 'Fiction',
        coverImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/TheAlchemist.jpg',
        description: 'The Alchemist follows the journey of an Andalusian shepherd named Santiago. He believes a recurring dream to be prophetic and embarks on a quest to find a hidden treasure in Egypt.',
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rating: 4.5,
                comment: 'A timeless story about following your dreams and listening to your heart.',
                date: '2023-05-15',
            },
            {
                user: 'Jane Doe',
                rating: 4.0,
                comment: 'Beautifully written and inspiring, though a bit simplistic in some parts.',
                date: '2023-05-18',
            }
        ],
        length: '6 hours 45 minutes',
        narrator: 'Jeremy Irons'
    },
    {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        genre: 'Self-help',
        coverImage: 'https://upload.wikimedia.org/wikipedia/en/b/bd/The_Subtle_Art_of_Not_Giving_a_F%2Ack_by_Mark_Manson_-_Book_Cover.png',
        description: 'This book offers a counterintuitive approach to living a good life, emphasizing the importance of embracing life’s struggles and finding joy in the process.',
        rating: 4.2,
        reviews: [
            {
                user: 'Emily Clark',
                rating: 4.5,
                comment: 'A refreshing perspective on self-help. Honest and to the point.',
                date: '2023-04-12',
            },
            {
                user: 'Mike Johnson',
                rating: 4.0,
                comment: 'Some great advice, but a bit repetitive towards the end.',
                date: '2023-04-20',
            }
        ],
        length: '5 hours 30 minutes',
        narrator: 'Roger Wayne'
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        genre: 'Mystery',
        coverImage: 'https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg',
        description: 'A symbologist and a cryptologist uncover a series of secrets hidden in famous artworks, leading to a thrilling chase through Europe to unravel a historical mystery.',
        rating: 4.0,
        reviews: [
            {
                user: 'Sophia Lee',
                rating: 4.5,
                comment: 'An engaging thriller with lots of twists and turns. Hard to put down!',
                date: '2023-06-10',
            },
            {
                user: 'Daniel Smith',
                rating: 4.0,
                comment: 'Gripping plot, though some historical inaccuracies. Still a fun read.',
                date: '2023-06-12',
            }
        ],
        length: '16 hours 25 minutes',
        narrator: 'Paul Michael'
    },
    {
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        genre: 'Non-fiction',
        coverImage: 'https://upload.wikimedia.org/wikipedia/en/0/06/%E1%B8%B2itsur_toldot_ha-enoshut.jpg',
        description: 'This book explores the history of humankind, from the emergence of Homo sapiens to the present, examining how biology and history have defined us and enhanced our understanding of what it means to be human.',
        rating: 4.8,
        reviews: [
            {
                user: 'Anna Bell',
                rating: 5.0,
                comment: 'A fascinating journey through human history. Enlightening and thought-provoking.',
                date: '2023-03-08',
            },
            {
                user: 'James Walker',
                rating: 4.7,
                comment: 'Brilliant insights into our past and future. A must-read for anyone curious about our species.',
                date: '2023-03-15',
            }
        ],
        length: '15 hours 17 minutes',
        narrator: 'Derek Perkins'
    },
    {
        title: 'Becoming',
        author: 'Michelle Obama',
        genre: 'Biography',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg',
        description: 'In her memoir, Michelle Obama chronicles the experiences that have shaped her, from her childhood in the South Side of Chicago to her time spent at the world’s most famous address.',
        rating: 4.9,
        reviews: [
            {
                user: 'Olivia Brown',
                rating: 5.0,
                comment: 'Inspiring and beautifully written. Michelle Obama’s story is truly remarkable.',
                date: '2023-02-25',
            },
            {
                user: 'Liam White',
                rating: 4.8,
                comment: 'A heartfelt and engaging memoir. Full of wisdom and grace.',
                date: '2023-03-01',
            }
        ],
        length: '19 hours 3 minutes',
        narrator: 'Michelle Obama'
    },
    {
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Science Fiction',
        coverImage: 'https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg',
        description: 'Set in the distant future, Dune tells the story of young Paul Atreides as he navigates the complexities of a noble family caught in a galactic struggle over the desert planet Arrakis, the only source of the universe’s most valuable substance.',
        rating: 4.7,
        reviews: [
            {
                user: 'Isabella Green',
                rating: 4.9,
                comment: 'A masterpiece of science fiction. The world-building is unparalleled.',
                date: '2023-01-30',
            },
            {
                user: 'Ethan Harris',
                rating: 4.5,
                comment: 'Complex and epic. A must-read for sci-fi fans.',
                date: '2023-02-02',
            }
        ],
        length: '21 hours 2 minutes',
        narrator: 'Simon Vance'
    }
];



// Audiobook.insertMany(audiobooks)
// .then(() => {
//     console.log('Successfully saved default items to DB');
// })
// .catch((err) => {
//     console.log(err);
// });




// app.get('/api/audiobooks', async (req, res) => {
//     try {
//       const audiobooks = await Audiobook.find();
//     //   console.log('Fetched audiobooks:', audiobooks); // Log fetched audiobooks
//       res.json(audiobooks);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });

app.get('/api/audiobooks', async (req, res) => {
  try {
    const filter = {};

    if (req.query.genre) {
      filter.genre = req.query.genre;
    }

    if (req.query.author) {
      filter.author = { $regex: new RegExp(req.query.author, 'i') };
    }

    if (req.query.minRating) {
      filter.rating = { $gte: parseFloat(req.query.minRating) };
    }

    const audiobooks = await Audiobook.find(filter);

    if (audiobooks.length === 0) {
      return res.status(404).json({ error: 'No audiobooks found matching the filters' });
    }

    res.json(audiobooks);
  } catch (error) {
    console.error('Error fetching audiobooks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/audiobooks/:id', async (req, res) => {
    try {
        const audiobook = await Audiobook.findById(req.params.id);
        res.json(audiobook);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/audiobooks/:id/reviews', async (req, res) => {
    try {
    //   const { user: name, rating, comment: text } = req.body;
      const audiobookId = req.params.id;

      function findAudiobookById(audiobookId ) {
        return Audiobook.findById(audiobookId);
      }
  
      // Assuming you have a function to find an audiobook by ID and add a review
      const audiobook = await findAudiobookById(audiobookId);
      if (!audiobook) {
        return res.status(404).json({ error: 'Audiobook not found' });
      }
  
      const newReview = {
        user: req.body.name,
        rating : req.body.rating,
        comment: req.body.comment,
        // date: new Date(),
      };
  
      audiobook.reviews.push(newReview);
      await audiobook.save();
  
      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add review' });
    }
  });
  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
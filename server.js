const express = require("express");
const path = require('path');
//const api = require('./routes/index.js').default
const db = require('./db/db.json');
const fs = require('fs');
const { response } = require("express");

const PORT = 3001;

const app = express();


app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

///Get request to notes.html
app.get('/notes',(req,res) =>
res.sendFile(path.join(__dirname,'./public/notes.html' ))
);

app.get('/',(req,res) => 
res.sendFile(path.join(__dirname,'./public/index.html'))
);

app.get('/api/notes', (req,res) => {
   res.json(db)
});

app.delete()

   

app.post('/api/notes', (req,res) => {
let response = '';
  

    if (req.body.title && req.body.text){
       response = {
            title: req.body.title,
            text: req.body.text
           
        };
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
          if (err) {
            console.error(err);
          } else {
            // Convert string into JSON object
            const parsedReviews = JSON.parse(data);
        
            // Add a new review
            parsedReviews.push(response);
           
            // Write updated reviews back to the file
            fs.writeFile(
              './db/db.json',
              JSON.stringify(parsedReviews, null, 4),
              (writeErr) =>
                writeErr
                  ? console.error(writeErr)
                  : console.info('Successfully updated reviews!')
            );
          }})
        }});
        
       
        
            

          



app.listen(PORT, () => {
    console.log('im runing')
});



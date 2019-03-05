let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let PORT = 3000;


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

//This was a challenge to do figuring out how to path to files in node_modules
app.use('/lightbox', express.static(__dirname + '/node_modules/lightbox2/dist/'))
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/motorbike', (req, res)=> {
    res.render('motorbike');
})

app.get('/smoking_man', (req, res)=> {
    res.render('smoking_man')
})

app.get('/accident', (req, res)=>{
    res.render('accident');
})

app.get('/business_card', (req, res)=>{
    res.render('business_card');
})

app.get('/cellist', (req, res)=>{
    res.render('cellist');
})

app.get('/cowboy', (req, res)=>{
    res.render('cowboy');
})

app.get('/dj', (req, res)=>{
    res.render('dj');
})

app.get('/drummer', (req, res)=>{
    res.render('drummer');
})

app.get('/lonely', (req, res)=>{
    res.render('lonely');
})

app.get('/machine_gun', (req, res)=>{
    res.render('machine_gun');
})

app.get('/pipes', (req, res)=>{
    res.render('pipes');
})
// app.get('/notes', (req, res)=>{
//     res.render('regExNotes')
// })

// app.get('/intermediate', (req, res)=>{
//     res.render('intermediate')
// })



app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`You are connected to ${PORT}`)
    }
})
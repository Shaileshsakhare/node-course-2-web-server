const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials'); 
app.set('view engine',hbs);

app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    console.log(req.url);
    next();
});


// app.use((req,res)=>{
//     res.render('maintainance.hbs',{
//         pageTitle : 'Maintainance'
//     });
// });

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        welcomeMessage : "Welcome to my website",
        pageTitle : "Welcome Page"
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle : "About Me",
    });
});

app.get('/projects',(req,res)=>{
    res.render('projects.hbs',{
        pageTitle : "Projects"
    });
});

app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})
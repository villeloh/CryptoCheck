'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  */

// causes routing to behave in the default way (everything in 'public' folder)
app.use(express.static(__dirname + '/public'));
  
/*

 -- TODO: A better way to do this: use ejs or pug as the view engine!
app
  .set('view engine', 'ejs')
  .get('/prices', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
 
  */
  
  /*
app.get('/prices', (req, res) => {
  //res.send(index);
  window.location.href="index.html";
});
*/

app.listen(PORT, () => {
  console.log('Example app listening on port 5000!');
});

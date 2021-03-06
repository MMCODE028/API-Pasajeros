const { json } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');
// Comentario de prueba 


app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index'));
app.use('/api/pasajeros',require('./routes/pasajeros'));

// Servidor 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${3000}`);

});
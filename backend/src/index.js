const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

/* Configurando conexão com mongoDB */
mongoose.connect(`mongodb://mongo:taikio@ds043694.mongolab.com:43694/chat`, {
    useNewUrlParser: true
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Configura a biblioteca de logs */
/* https://www.npmjs.com/package/morgan */
app.use(morgan('dev'));

/* Importa o arquivo de rotas e configura no express */
app.use(require("./routes"));

/* Configura o uso de arquivos estáticos */
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

app.listen(3000);
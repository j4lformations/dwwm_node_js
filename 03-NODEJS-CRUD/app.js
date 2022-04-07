// Crée par Joachim Zadi le 05/04/2022 à 12:14. Version 1.0
// ========================================================

//////////////////////////////////////////////////////////////////////
// IMPORTS DES MODULES DE L'APP
const express = require('express');
const twig = require('twig');
const path = require('path');
require('dotenv').config();
const stagiaireRouter = require('./routes/stagiaireRoutes');
require('./config/database');

//////////////////////////////////////////////////////////////////////
// CREATION DE L'INSTANCE DU SERVEUR
const app = express();

// DECLARATION DU MOTEUR DE VUE
app.set('view engine', 'twig');

// LE CHEMIN DES VUES
app.set('views', path.join(__dirname, 'views'));

//////////////////////////////////////////////////////////////////////
// LES MIDDLEWARES
app.use(express.json());

app.use('/dwwm/stagiaires', stagiaireRouter);

app.get('/', (req, res) => {
    res.render('layout', {
        titre: "Je suis le titre de la page"
    });
});

module.exports = app;
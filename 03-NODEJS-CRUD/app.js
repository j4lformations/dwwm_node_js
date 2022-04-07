// Crée par Joachim Zadi le 05/04/2022 à 12:14. Version 1.0
// ========================================================

//////////////////////////////////////////////////////////////////////
// IMPORTS DES MODULES DE L'APP
const express = require('express');
require('dotenv').config();
const stagiaireRouter = require('./routes/stagiaireRoutes');
require('./config/database');

//////////////////////////////////////////////////////////////////////
// CREATION DE L'INSTANCE DU SERVEUR
const app = express();

//////////////////////////////////////////////////////////////////////
// LES MIDDLEWARES
app.use(express.json());

app.use('/dwwm/stagiaires', stagiaireRouter);

module.exports = app;
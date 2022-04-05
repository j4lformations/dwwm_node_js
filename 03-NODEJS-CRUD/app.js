// Crée par Joachim Zadi le 05/04/2022 à 12:14. Version 1.0
// ========================================================

//////////////////////////////////////////////////////////////////////
// IMPORTS DES MODULES DE L'APP
const express = require('express');
const stagiaireRouter = require('./routes/stagiaireRoutes');


//////////////////////////////////////////////////////////////////////
// CREATION DE L'INSTANCE DU SERVEUR
const app = express();


app.use('/dwwm/stagiaires', stagiaireRouter);

//////////////////////////////////////////////////////////////////////
// DEMARRAGE DU SERVEUR
app.listen(4000, () => {
    console.log('http://localhost:4000');
});


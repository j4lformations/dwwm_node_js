// Crée par Joachim Zadi le 30/03/2022 à 11:34. Version 1.0
// ========================================================

// On importe le module express
const express = require('express');

// Creation d'une instance du serveur'
const app = express();

// On definit le port du serveur
const port = 5500;

const stagiairesRouter = require('./routes/stagiairesRoute');

app.use('/api/stagiaires', stagiairesRouter);

// Demarrage du serveur
app.listen(port, () => {
    console.log(`Application dispo à l'adresse http://localhost:${port}`);
});
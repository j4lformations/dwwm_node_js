// Crée par Joachim Zadi le 30/03/2022 à 11:34. Version 1.0
// ========================================================

// On importe le module express
const express = require('express');

// Creation d'une instance du serveur'
const app = express();

// On definit le port du serveur
const port = 5500;

// Creation de la route GET
app.get('/api/stagiaires', function (req, res) {
    // LA GESTION DE CETTE ROUTE SE PASSE ICI
    res
        .status(200)
        .json({
            "msg": "METHODE GET OK !"
        });
});

// Creation de la route POST
app.post('/api/stagiaires', (req, res) => {
    res
        .status(200)
        .json({
            "msg": "METHODE POST OK !"
        });
});

// Creation de la route parametrée GET
app.get('/api/stagiaires/:id', (req, res) => {

    // console.log(req.params);
    res
        .status(200)
        .json({
            "msg": `METHODE GET de parametre ${req.params.id} OK !`
        });
});

// Creation de la route parametrée PUT
app.put('/api/stagiaires/:id', (req, res) => {
    res
        .status(200)
        .json({
            "msg": `METHODE PUT de parametre ${req.params.id} OK !`
        });
});

// Creation de la route parametrée PUT
app.delete('/api/stagiaires/:id', (req, res) => {
    res
        .status(200)
        .json({
            "msg": `METHODE DELETE de parametre ${req.params.id} OK !`
        });
});

// Demarrage du serveur
app.listen(port, () => {
    console.log(`Application dispo à l'adresse http://localhost:${port}`);
});

// Crée par Joachim Zadi le 30/03/2022 à 11:34. Version 1.0
// ========================================================

// On importe le module express
const express = require('express');

// Creation d'une instance du serveur'
const app = express();

// On definit le port du serveur
const port = 5500;

// REGROUPEMENTS DES CONSTANTES DE ROUTES
const tousLesStagiaires = function (req, res) {
    // LA GESTION DE CETTE ROUTE SE PASSE ICI
    res
        .status(200)
        .json({
            "msg": "METHODE GET OK !"
        });
}
const ajouterUnStagiaire = (req, res) => {
    res
        .status(200)
        .json({
            "msg": "METHODE POST OK !"
        });
}
const rechercherStagiaire = (req, res) => {
    res
        .status(200)
        .json({
            "msg": `METHODE GET de parametre ${req.params.id} OK !`
        });
}
const modifierUnStagiaire = (req, res) => {
    res
        .status(200)
        .json({
            "msg": `METHODE PUT de parametre ${req.params.id} OK !`
        });
}
const supprimerUnStagiaire = (req, res) => {
    res
        .status(200)
        .json({
            "msg": `METHODE DELETE de parametre ${req.params.id} OK !`
        });
}

// FACTORISATION DES ROUTES
// app.get('/api/stagiaires', tousLesStagiaires);
// app.get('/api/stagiaires/:id', rechercherStagiaire);
// app.post('/api/stagiaires', ajouterUnStagiaire);
// app.put('/api/stagiaires/:id', modifierUnStagiaire);
// app.delete('/api/stagiaires/:id', supprimerUnStagiaire);

// CHAINAGE DES ROUTES
app.route('/api/stagiaires')
    .get(tousLesStagiaires)
    .post(ajouterUnStagiaire);

app.route('/api/stagiaires/:id')
    .get(rechercherStagiaire)
    .put(modifierUnStagiaire)
    .delete(supprimerUnStagiaire);

// Demarrage du serveur
app.listen(port, () => {
    console.log(`Application dispo à l'adresse http://localhost:${port}`);
});
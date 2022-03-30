// Crée par Joachim Zadi le 30/03/2022 à 16:07. Version 1.0
// ========================================================

const express = require('express');
const router = express.Router();

// EXEMPLE DE MIDDLEWARE
function monMiddleWare(req, res, next) {
    console.log('Je suis dans le middleware');
    console.log(new Date().getTime());
    req.prenom = 'Joachim';
    req.jour = new Date().getDay();
    next();
}

// APPEL DU MIDDLEWARE

// REGROUPEMENTS DES CONSTANTES DE ROUTES
const tousLesStagiaires = function (req, res) {
    // LA GESTION DE CETTE ROUTE SE PASSE ICI
    res
        .status(200)
        .json({
            "msg": "METHODE GET OK !",
            "prenom": `${req.prenom}`,
            "jour": `${req.jour}`
        });
}
const ajouterUnStagiaire = (req, res) => {
    res
        .status(200)
        .json({
            "msg": "METHODE POST OK !",
            "prenom": `${req.prenom}`
        });
}
const rechercherStagiaire = (req, res) => {
    res
        .status(200)
        .json({
            "msg": `METHODE GET de parametre ${req.params.id} OK !`,
            "prenom": `${req.prenom}`,
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

router
    .route('/')
    .get(tousLesStagiaires)
    .post(ajouterUnStagiaire);

router
    .route('/:id')
    .get(rechercherStagiaire)
    .put(modifierUnStagiaire)
    .delete(supprimerUnStagiaire);

module.exports = router;
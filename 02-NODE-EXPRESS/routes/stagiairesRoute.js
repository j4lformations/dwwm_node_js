// Crée par Joachim Zadi le 30/03/2022 à 16:07. Version 1.0
// ========================================================

const express = require('express');
const router = express.Router();

const controller = require('../controllers/stagiairesController')

router
    .route('/')
    .get(controller.tousLesStagiaires)
    .post(controller.ajouterUnStagiaire);

router
    .route('/:id')
    .get(controller.rechercherStagiaire)
    .put(controller.modifierUnStagiaire)
    .delete(controller.supprimerUnStagiaire);

module.exports = router;
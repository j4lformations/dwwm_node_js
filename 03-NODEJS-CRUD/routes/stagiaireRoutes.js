// Crée par Joachim Zadi le 05/04/2022 à 16:49. Version 1.0
// ========================================================

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const controller = require('../controllers/stagiaireController');

//GET ==> RECUPERATIONS DE TOUS LES STAGIAIRES
router
    .route('/')
    .get(controller.allStagiaires)
    .post(controller.addStagiaire);

router
    .route('/:id')
    .get(controller.getStagiaireById)
    .put(controller.updateStagiaireById)
    .delete(controller.deleteStagiaireById);

module.exports = router;
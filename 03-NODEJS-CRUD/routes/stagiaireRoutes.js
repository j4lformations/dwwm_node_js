// Crée par Joachim Zadi le 05/04/2022 à 16:49. Version 1.0
// ========================================================

const express = require('express');
const router = express.Router();

//////////////////////////////////////////////////////////////////////
// LES CONTROLLERS DE L'APP

/**
 * Permet de reucuperer la liste des stagiaires en DBB
 * @param requete
 * @param reponse
 */
const allStagiaires = function (requete, reponse) {
    reponse
        .status(200)
        .json({
            statut: reponse.statusCode,
            message: 'ROUTE GET ALL OK'
        });
}

/**
 * Permet d'ajout un stagiaire en BDD
 * @param requete
 * @param reponse
 */
const addStagiaire = function (requete, reponse) {
    reponse
        .status(200)
        .json({
            status: reponse.statusCode,
            message: 'ROUTE POST OK'
        });
}

/**
 * Permet de recuperer un stagiaire à partir de son identifiant
 * @param requete
 * @param reponse
 */
const getStagiaireById = function (requete, reponse) {
    // console.log(requete.params)
    reponse
        .status(200)
        .json({
            status: reponse.statusCode,
            message: 'ROUTE GET BY ID OK'
        });
}

/**
 * Permet de modifier un stagiaire en BDD à partir de sin identifiant
 * @param requete
 * @param reponse
 */
const updateStagiaireById = (requete, reponse) => {
    reponse
        .status(200)
        .json({
            status: reponse.statusCode,
            message: 'ROUTE PUT BY ID OK'
        });
}

/**
 * Permet de supprimer un stagiaire en BDD à partir de son id
 * @param requete
 * @param reponse
 */
const deleteStagiaireById = (requete, reponse) => {
    reponse
        .status(200)
        .json({
            status: reponse.statusCode,
            message: 'ROUTE DELETE BY ID OK'
        });
}

//GET ==> RECUPERATIONS DE TOUS LES STAGIAIRES
router
    .route('/')
    .get(allStagiaires)
    .post(addStagiaire);

router
    .route('/:id')
    .get(getStagiaireById)
    .put(updateStagiaireById)
    .delete(deleteStagiaireById);

module.exports = router;
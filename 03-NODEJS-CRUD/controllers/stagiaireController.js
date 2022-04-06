// Crée par Joachim Zadi le 06/04/2022 à 09:57. Version 1.0
// ========================================================
const Stagiaire = require('../models/stagiaireModel');

//////////////////////////////////////////////////////////////////////
// LES CONTROLLERS DE L'APP

/**
 * Permet de recuperer la liste des stagiaires en DBB
 * @param requete
 * @param reponse
 */
exports.allStagiaires = async function (requete, reponse) {
    // Permet de recupere tous les stagiaires en BDD
    const stagiaires = await Stagiaire.find({});
    reponse
        .status(200)
        .json(stagiaires);
}

/**
 * Permet d'ajout un stagiaire en BDD
 * @param requete
 * @param reponse
 */
exports.addStagiaire = async function (requete, reponse) {
    let stagiaire = new Stagiaire(requete.body);
    stagiaire = await stagiaire.save();
    reponse
        .status(200)
        .json(stagiaire);
}

/**
 * Permet de recuperer un stagiaire à partir de son identifiant
 * @param requete
 * @param reponse
 */
exports.getStagiaireById = function (requete, reponse) {
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
exports.updateStagiaireById = (requete, reponse) => {
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
exports.deleteStagiaireById = (requete, reponse) => {
    reponse
        .status(200)
        .json({
            status: reponse.statusCode,
            message: 'ROUTE DELETE BY ID OK'
        });
}

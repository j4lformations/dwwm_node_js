// Crée par Joachim Zadi le 06/04/2022 à 09:57. Version 1.0
// ========================================================
const Stagiaire = require('../models/stagiaireModel');
const ObjectID = require("bson-objectid");

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

    if (!stagiaires) {
        reponse
            .status(200)
            .json({
                msg: 'Aucun stagiaire en BDD'
            })
    } else {
        reponse.render('stagiaires', {
            titre: "Liste des stagiaires",
            listeStagiaires: stagiaires,
            url: requete.baseUrl
        });
    }
}

/**
 * Permet d'ajout un stagiaire en BDD
 * @param requete
 * @param reponse
 */
exports.addStagiaire = async function (requete, reponse) {
    let stagiaire = new Stagiaire(requete.body);
    try {
        stagiaire = await stagiaire.save();
        reponse
            .status(200)
            .json(stagiaire);
    } catch (e) {
        reponse
            .status(200)
            .json({
                message: e.message
            });
    }
}

/**
 * Permet de recuperer un stagiaire à partir de son identifiant
 * @param requete
 * @param reponse
 */
exports.getStagiaireById = async function (requete, reponse) {
    const id = requete.params.id;
    if (!ObjectID.isValid(id)) {
        return reponse
            .status(400)
            .json({
                message: `L'id ${id} est non conforme au format attendu`
            });
    }
    const stagiaire = await Stagiaire.findOne({_id: id});
    reponse
        .status(200)
        .json(stagiaire);
}

/**
 * Permet de modifier un stagiaire en BDD à partir de sin identifiant
 * @param requete
 * @param reponse
 */
exports.updateStagiaireById = async (requete, reponse) => {
    const id = requete.params.id;
    if (!ObjectID.isValid(id)) {
        return reponse
            .status(400)
            .json({
                message: `L'id ${id} est non conforme au format attendu`
            });
    }

    const stagiaire = await Stagiaire.findByIdAndUpdate({_id: id}, requete.body/*, {
        new: true,
        rawResult: true
    }*/);
    reponse
        .status(200)
        .json(stagiaire);
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

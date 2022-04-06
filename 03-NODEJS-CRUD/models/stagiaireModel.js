// Crée par Joachim Zadi le 06/04/2022 à 13:58. Version 1.0
// ========================================================
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StagiaireSchema = new Schema({
    prenom: String,
    ddn:Date,
    email:String,
    mdp:String
});

const Stagiaire = mongoose.model('Stagiaire', StagiaireSchema);
module.exports = Stagiaire;


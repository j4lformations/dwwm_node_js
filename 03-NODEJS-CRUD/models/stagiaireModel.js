// Crée par Joachim Zadi le 06/04/2022 à 13:58. Version 1.0
// ========================================================
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const {capitalCase} = require('capital-case');

const StagiaireSchema = new Schema({
    prenom: {
        type: String,
        required: [true, 'Le champ prénom est obligatoire'],
        trim: true,
        maxLength: [15, 'Le prenom ne peut exceder 15 caracteres'],
        unique: true
    },
    ddn: Date,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Merci de saisir une adresse email valide !!!"]
    },
    mdp: String
});

// Fonction de rappel
StagiaireSchema.pre('save', function (suivant) {
    this.prenom = capitalCase(this.prenom);
    suivant();
});

const Stagiaire = mongoose.model('Stagiaire', StagiaireSchema);
module.exports = Stagiaire;


// Crée par Joachim Zadi le 06/04/2022 à 11:47. Version 1.0
// ========================================================
const mongoose = require('mongoose');

/**
 * Permet d'etablir la connexion au serveur MongoDB
 * @returns {Promise<void>}
 */
exports.mongoConnexion = (async () => {
    await mongoose
        .connect('mongodb://localhost/stagiaire_db')
        .then(() => {
            console.log('CONNEXION AU SERVER MONGO OK !!! 💪');
        })
        .catch(erreur => {
            console.log('CONNEXION AU SERVER MONGO NOK !!! 🔥', erreur.message);
        })
})();
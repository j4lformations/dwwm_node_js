// Crée par Joachim Zadi le 06/04/2022 à 11:47. Version 1.0
// ========================================================
const mongoose = require('mongoose');

const LOCAL_SERVER = process.env.DB_HOST_LOCAL
    .replace('<DATABASE>', process.env.DB_NAME_LOCAL);

const REMOTE_SERVER = process.env.DB_HOST_REMOTE
    .replace('<USER>', process.env.DB_USER_REMOTE)
    .replace('<PASSWORD>', process.env.DB_PASSWORD_REMOTE)
    .replace('<DATABASE>', process.env.DB_NAME_REMOTE);

const DB_SERVER = process.env.NODE_ENV === 'prod' ? REMOTE_SERVER : LOCAL_SERVER;

/**
 * Permet d'etablir la connexion au serveur MongoDB
 * @returns {Promise<void>}
 */
exports.mongoConnexion = (async () => {
    await mongoose
        .connect(DB_SERVER)
        .then(() => {
            console.log('CONNEXION AU SERVER MONGO OK !!! 💪');
        })
        .catch(erreur => {
            console.log('CONNEXION AU SERVER MONGO NOK !!! 🔥', erreur.message);
        })
})();
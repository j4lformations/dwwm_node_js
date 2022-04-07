// Crée par Joachim Zadi le 07/04/2022 à 12:08. Version 1.0
// ========================================================

//////////////////////////////////////////////////////////////////////
// DEMARRAGE DU SERVEUR

const app = require('../app');

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
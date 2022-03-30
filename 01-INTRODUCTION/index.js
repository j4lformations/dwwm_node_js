// Crée par Joachim Zadi le 30/03/2022 à 09:26. Version 1.0
// ========================================================

//////////////////////////////////////////////////////////////////////////////
// let prenom = 'ALT-RH';
// console.log(prenom);
//
// window.prompt(); // => Non autoriser sur la platform native de NODE

//////////////////////////////////////////////////////////////////////////////
// const fs = require('fs');
//
// // Comportement Synchrone
// console.log(fs.readFileSync('text/entree.txt','utf-8'));
// console.log('Fin de la lecture du fichier');
//
// // Comportement Asynchrone
// fs.readFile('text/entree.txt', 'utf-8', function (err, data) {
//     console.log(data);
// });
// console.log('Fin de la lecture du fichier');

//////////////////////////////////////////////////////////////////////////////
const http = require('http');
const PORT = 5000;

// Creation d'une instance du serveur node
const server = http.createServer((request, response) => {

    // On declare les elements du Header de la response
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    let pathName = request.url;
    // console.log(pathName);

    if(pathName === '/stagiaires'){
        response.end('<h1>Pages liste des stagiaires</h1>');
    }else if(pathName === '/stagiaire'){
        response.end(`<h1>Page de detail d'un stagiaire</h1>`);
    }else if(pathName==='/'){
        response.end(`<h1>Page d'accueil du site</h1>`);
    }else{
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        response.end(`<h1 style="color: red">Page introuvable sur le serveur</h1>`);
    }
});

// On lance l'instance du serveur
server.listen(PORT, 'localhost', () => {
    console.log(`Serveur dispo à l'adresse http://localhost:${PORT}`);
});
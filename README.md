# YannickLacroix_7_22072021

## Installer le projet

### Back-end
Exécuter les commandes suivantes:
``cd backend``
``npm i``

À la racine du dossier, créer un dossier intitulé .env, copier/coller et compléter les champs suivants:
``DB_HOST=
DB_USER=
DB_PASS=
DB_DATABASE=
DB_TOKENENCRYPTIONKEY=
``
Note: le dernier champ est une chaîne de caractères.

Enfin, exécuter les requêtes indiquées dans le fichier groupomania.sql (disponible à la racine du projet) dans votre invite de commandes SQL.

### Front-end
Exécuter les commandes suivantes:
``cd frontend
npm i
cd groupomania
npm i
``

## Faire tourner le projet
Dans le dossier backend, exécuter la commande:
``nodemon server``

Dans une autre instance du terminal, dans le dossier frontend/groupomania, exécuter la commande:
``npm run serve``

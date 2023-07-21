 ## Présentation du projet :
     SocialNetwork est un réseau social interne pour une entreprise seul les employé(e)s enregistré dans la base de données peuvent se connecter sur le réseau.
     pour vous connecter en tant qu'administateur : 
       mail : admin.admin@socialnetwork.fr,
       badge : 1001023,
       nom : admin,
       prénom : admin,

     pour vous connecter en tant qu'utilisateur test : 
       mail : test.test@socialnetwork.fr,
       badge : 00,
       nom : test,
       prénom : test,

     Pour vous connecter ou vous enregistrer en tant qu'utilisateur vous pouvez retrouvez dans le fichier mongoDBdump la liste des utilisteurs inscrit sur la base de donnée.
     si il y à une erreur il est possible que l'utisateur soit déjà utilisé par quelqu'un, veuillez en essayer un autre.
     
  
  ## Installation : 

    Installation de node JS :

    Rendez vous sur le site de nodeJs (https://nodejs.org) et téléchargez la dernière version stable
    Pour vérifier que nodeJS est bien installé, tapez la commande suivante dans un terminal : node -v
    Vérifiez que la version retournée est bien supérieure ou égale a la version v16.16.0

    Installation des packages : 
    
    => se rendre à la racine du projet à l'aide d'un terminal de commande.
    => exécuter ```npm install```.
    => Completer le fichier ```.env.exemple``` avec les variables d'environnement et renomer le en ```.env``` .
   
  ## Démarrage du projet :

    ### Démarrage du Frontend : 

      => se rendre à la racine du projet à l'aide d'un terminal de commande et exécuter ```npm run dev```.
     
    ### Démarrage du Backend : 

       => se rendre dans le dossier ```backend``` à l'aide d'un terminal de commande et exécuter ```nodemon```.
       
    ### Ouverture du projet dans le navigateur :
    
      => se rendre à l'adresse http://localhost:3000/ 
     
     
   ## Précision :
        ### Dans le dossier mongoDBdump vous trouverez la base données ainsi que les employées déjà crée.
        ### Une collection employees Mondodb à été crée avec les employé(e)s simulé car pour se pourvoir creer un compte il faut etre enregistrer dans la collection employees.
        ci dessous vous trouverez la liste des employées, vous pouvez bien sur en ajouter ou retirer.
        vous trouverez les données necessaire pour l'enregistrement et la connection des utilisateurs et la connection de l'administrateur.
        ### Un administrateur peut etre ajouter, pour cela definisez dans la collection ```users```  la clé valeur => role : 'admin' à l'utilisateur souhaité.
        ### Pour supprimer cette option de controle des usagers rendez-vous :
        dans le dossier: backend/controllers puis dans le fichier : auth.controllers ligne 30 ,et suivez les instructions.

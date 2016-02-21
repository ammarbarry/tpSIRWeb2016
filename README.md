TP Web : Javascript et HTML5

But du TP: A Voir une idée sur l'application d'une architecture MVC avec le language JavaScript.
Pas d'utilisation de la librairie AngularJS pour cerner le MVC.

Listener: permet de gerer tout les interactions avec la souris;
 -Appuyer sur le bouton permet d'enregistrer la premiere position et active le mode dessin. 
 -Replacer la souris permet d'enregistrer la seconde position. 
 -Relacher la souris permet de desactiver du mode dessin.


Model:définit la structure de chaque objet

 -L'objet drawing
 -Les objets lignes 
 -Les objets rectangles

View: met à jour l'interface et la generation d'une liste des formes avec une methode updateShapeList(drawing) et on deleteShape(index).

Controleur: fait l'ensemble des traitements en appellant, suite à des interactions sur les listeners, des méthodes du model ou de la view.
Nous avons trois méthodes qui correspondent aux trois interactions dans le listener:

-onInteractionStart : création de l'objet qui représente le rectangle/ligne suivant le choix fait.
-onInteractionUpdate: c'est la maj en temps réel des coordonnées de la forme
-onInteractionEnd : c'est la fin de l'interaction.

Ammar BARRY & Mbaffeu Dibate Erika

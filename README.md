TP Web : Javascript et HTML5

But du TP: A Voir une id�e sur l'application d'une architecture MVC avec le language JavaScript.
Pas d'utilisation de la librairie AngularJS pour cerner le MVC.

Listener: permet de gerer tout les interactions avec la souris;
 -Appuyer sur le bouton permet d'enregistrer la premiere position et active le mode dessin. 
 -Replacer la souris permet d'enregistrer la seconde position. 
 -Relacher la souris permet de desactiver du mode dessin.


Model:d�finit la structure de chaque objet

 -L'objet drawing
 -Les objets lignes 
 -Les objets rectangles

View: met � jour l'interface et la generation d'une liste des formes avec une methode updateShapeList(drawing) et on deleteShape(index).

Controleur: fait l'ensemble des traitements en appellant, suite � des interactions sur les listeners, des m�thodes du model ou de la view.
Nous avons trois m�thodes qui correspondent aux trois interactions dans le listener:

-onInteractionStart : cr�ation de l'objet qui repr�sente le rectangle/ligne suivant le choix fait.
-onInteractionUpdate: c'est la maj en temps r�el des coordonn�es de la forme
-onInteractionEnd : c'est la fin de l'interaction.

Ammar BARRY & Mbaffeu Dibate Erika

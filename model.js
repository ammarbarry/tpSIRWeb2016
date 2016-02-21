
// Implémenter ici les 4 classes du modèle.


var gDraw;

//Classe dessin
function Drawing(){
	//Tableau de dessin
	this.dessins = new Array();
	
	gDraw = this;
	
	//Ajout Format
	this.addDessins = function(format) {
        this.dessins.push(format);
    }.bind(this);
  //Suppression format
    this.removeDessins = function(index) {
        this.dessins.splice(index,1);
    }.bind(this);
};

//Classe Format
function Format(couleur,epaisseur){
	this.couleur = couleur;
	this.epaisseur = epaisseur;
};

//Classe Rectangle
function Rectangle(coordX, coordY, largeur, hauteur, epaisseur , couleur ){
	Format.call(this, couleur, epaisseur);
	this.coordX = coordX;
	this.coordY = coordY;
	this.largeur = largeur;
	this.hauteur = hauteur;
	
	this.name = function(){
		return 'Rectangle:'+this.coordX+','+this.coordY+','+this.largeur+','+this.hauteur;
	}.bind(this);
	
};

//Classe ligne
function Ligne(coordx1,coordy1,coordx2,coordy2,epaisseur,couleur){
	Format.call(this, couleur, epaisseur);
	this.coordx1 = coordx1;
	this.coordy1 = coordy1;
	this.coordx2 = coordx2;
	this.coordy2 = coordy2;
	
	this.name = function(){
		return 'Ligne:'+this.coordx1+','+this.coordy1+','+this.coordx2+','+this.coordy2+','+this.couleur+','+this.epaisseur;
	}.bind(this);
};

//Héritage pour les objets lignes et rectangles (sous classe de Format)
Ligne.prototype = new Format();
Rectangle.prototype = new Format();

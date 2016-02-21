
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	
	// Définir ici les attributs de la 'classe'
	this.posInitialX = 0;
	this.posInitialY = 0;
	this.posFinalX = 0;
	this.posFinalY = 0;
	this.isdown = false;
	
	this.debug  = function (eventText) {
		console.log(eventText, this.posInitial1, this.posInitial2, this.posFinal1, this.posFinal2, this.isdown);
	}.bind(this);
	
	// Developper les 3 fonctions gérant les événements
	
	//	Fonction Presseion
	this.maFctGérantLaPression = function(evt){
		var res = getMousePosition(canvas, evt) ;
		this.posInitialX = res.x;
		this.posInitialY = res.y;
		this.isdown = true;
		this.debug("mouse down");
		
	}.bind(this)
	
	//fonction Deplacement
	this.maFctGérantLeDéplacement = function(evt){
		if(this.isdown){
			var res = getMousePosition(canvas, evt) ;
			this.posFinal1 = res.x;
			this.posFinal2 = res.y;			
			this.debug("mouse move");
		}
		
	}.bind(this)
	
	//fonction Relachement
	this.maFctGérantLeRelâchement= function(evt){
		var res = getMousePosition(canvas, evt) ;
		this.debug("mouse up");
		this.isdown = false;
	}.bind(this);
	
	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
    canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
    canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};




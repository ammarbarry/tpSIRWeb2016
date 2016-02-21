
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(DnD){
		var butRect = document.getElementById('butRect');
		var butLine = document.getElementById('butLine');
		var spinnerWidth = document.getElementById('spinnerWidth');
		var colour = document.getElementById('colour');
		
		this.currLineWidth= spinnerWidth.value;
		this.currColour= colour.value;
		
		var largeur = 0;
		var hauteur = 0;
		
		DnD.posFinalX = DnD.posInitialX;
		DnD.posFinalY = DnD.posInitialY;

		
		if(butRect.checked) {
			this.currEditingMode=editingMode.rect;
			this.currentshape = new Rectangle(DnD.posInitX,DnD.posInitY,largeur,hauteur,this.currLineWidth,this.currColour);
		
		}else if(butLine.checked){
			this.currEditingMode = editingMode.line;
			this.currentshape = new Ligne(DnD.posInitialX,DnD.posInitialY,DnD.posFinalX,DnD.posFinalY,this.currLineWidth,this.currColour);
		}else{
			console.log('Format inexistant');
		}
		
	}.bind(this);
	
	this.onInteractionUpdate=function(DnD){
		
		//Recupèration de nouvelles coordonnées
		if(butRect.checked) {
			
			this.currentshape.largeur = DnD.posFinalX-DnD.posInitialX;
			this.currentshape.hauteur = DnD.posFinalY-DnD.posInitialY;
		
		}else if(butLine.checked){
			this.currentshape.coordx2 = DnD.posFinalX;
			this.currentshape.coordy2 = DnD.posFinalY;
		}else{
			console.log('Format inexistant');
		}
	
	}.bind(this);
	
	//Affichge nouveau format créé & ajout dans la liste
	this.onInteractionEnd=function(DnD){
		
			drawing.addDessins(this.currentshape);
			drawing.paint(ctx);
		
			updateFList(drawing.dessins);
			
	}.bind(this);
};



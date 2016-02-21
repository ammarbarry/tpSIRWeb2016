
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
// Manager color
	ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.beginPath();
    ctx.rect(this.coordX, this.coordY, this.largeur, this.hauteur);
    ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
	// Manager color
	ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
	ctx.beginPath();
	ctx.moveTo(this.coordx1, this.coordy1);
	ctx.lineTo(this.coordx2, this.coordy2);
	ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.dessins.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Format.prototype.paint = function(ctx){
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.size;
}


var formatList = document.getElementById('shapeList');

updateFList = function(dessins){
	var listDessin = '';
	dessins.forEach(function(Format){
		listDessin+= '<span><button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove-sign"></span></button>'  + Format.name() + '<br></span>';

	});
	formatList.innerHTML = listDessin;
}


removeFormatDessin = function(evt)
{
    var mark = evt.target || window.event.srcElement;
    var parMark = mark.parentNode;
    var marMark = parMark.parentNode;
    var index = 0;
    if (cible.nodeName === 'BUTTON')
    {
        index = Array.prototype.indexOf.call(marMark.childNodes, parMark );
        gDraw.dessions.splice(index,1);
       
        while (marMark.firstChild){
        	marMark.removeChild(marMark.firstChild);
        }
        gDraw.paint(ctx);
        updateFList(gDraw.dessins)
    }
}
formatList.addEventListener('click', removeFormatDessin, false);
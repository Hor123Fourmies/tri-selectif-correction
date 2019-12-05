// Data: déchets, poubelles
// poubelles: 0=jaune,..., 3=marron
// Un tableau par groupe de déchets

var dechets_jaunes = ['dechet1', 'dechet2'];
var dechets_verts = ['dechet vert 1'];
var dechets_bleus = ['dechet bleu 1'];
var dechets_marron = ['dechet marron 1'];

var dechets = [];
dechets = dechets.concat (dechets_jaunes,dechets_verts,dechets_bleus,dechets_marron);

var poubelles = document.getElementsByClassName('poubelle');
var dechet;

var genererDechet = document.getElementById('genererDechet');
genererDechet.onclick = function () {
    var dechetIndex = Math.floor(Math.random()*dechets.length);
    dechet = dechets[dechetIndex];
    document.getElementById('dechetDisplay').innerHTML= dechet;
    alert(dechetIndex);
};

for (let i=0; i < poubelles.length; i++) {
poubelles[i].onclick = function () {
    if (i===0){
        var tableau = dechets_jaunes;
    }

    if (i===1){
        var tableau = dechets_verts;
    }

    if (i===2){
        var tableau = dechets_bleus;
    }

    if (i===3){
        var tableau = dechets_marron;
    }

    // indexOf permet de retourner l'index d'un element à l'interieur d'un tableau s'il est présent
    alert (tableau.indexOf(dechet));
    if (tableau.indexOf(dechet)>-1){
        alert('gagné');
    }
    else{
        alert('mauvaise poubelle');
    }
};
}

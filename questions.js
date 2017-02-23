/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
   var length = texte.length;
    return length;
}
var remplaceECar = function (texte) {
  var texteReplace = texte.replace('e', ' ')
    return texteReplace;
}
var concatString = function (texte1, texte2) {
   var texte3 = texte1 + texte2;
    return texte3;
}
var afficherCar5 = function (texte) {
  var chaineTexte = texte.charAt(4);
    return chaineTexte;
}
var afficher9Car = function (texte) {
  var car = texte.slice(0, 9);
    return car;
}
var majusculeString = function (texte) {
  var texte = texte.toUpperCase();
    return texte;
}
var minusculeString = function (texte) {
  var texte = texte.toLowerCase();
    return texte;
}
var SupprEspaceString = function (texte) {
  texteReplace = texte.trim(' ', ' ')
    return texteReplace;
}
var IsString = function (texte) {
   var texteTrue = texte.toString(texte);
    return true;
}
var AfficherExtensionString = function (texte) {
  var textExt = texte.split('.').pop();
     return textExt;

}
var NombreEspaceString = function (texte) {
  var Nombre = texte.split(' ').length -1;
    return Nombre;
}
var InverseString = function (texte) {
  var inverse = texte.split('').reverse().join('');
    return inverse;

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
  var puissance = Math.pow(x, y);
    return puissance;
}
var valeurAbsolue = function (nombre) {
  var absolue = Math.abs(nombre, ' ');
    return absolue;
}
var valeurAbsolueArray = function (array) {
  for(i = 0; i < array.length; i++){
   array[i] = Math.abs(array[i]);
 }
     return array;
}
var sufaceCercle = function (rayon) {
  var cercle =  Math.round(Math.PI * rayon * rayon);
    return cercle;
}
var hypothenuse = function (ab, ac) {
  var bcSquared = Math.pow(ab, 2) + Math.pow(ac, 2);
   var bc = Math.sqrt(bcSquared);
    return bc;
}
var calculIMC = function (poids, taille) {
  var imc = poids / (taille*taille);
   var calcul = imc.toFixed(2);
    var imcFinal = parseFloat(calcul);
    return imcFinal;
}

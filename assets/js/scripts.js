function reemplazar(){
  var texto = document.getElementById('texto').innerHTML;
  var sed = texto.replaceAll('sed','UNO');
  var vehicula = sed.replaceAll('vehicula','DOS');
  var vivamus = vehicula.replaceAll('vivamus','TRES');
  var nam = vivamus.replaceAll('nam','CUATRO');
  var eros = nam.replaceAll('eros','CINCO');
  var vestibulum = eros.replaceAll('vestibulum','SEIS');
  var quam = vestibulum.replaceAll('quam','SIETE');
  var sollicitudin = quam.replaceAll('sollicitudin','OCHO');
  var finibus = sollicitudin.replaceAll('finibus','NUEVE');
  var dictum = finibus.replaceAll('dictum','DIEZ');
  var morbi = dictum.replaceAll('morbi','ONCE');
  
  document.getElementById('texto').innerHTML = morbi;
  contadores(texto);
  }

function contadores(texto){
var cSed= texto.match(/sed/g).length;
var cVehicula= texto.match(/vehicula/g).length;
var cVivamus= texto.match(/vivamus/g).length;
var cNam= texto.match(/nam/g).length;
var cEros= texto.match(/eros/g).length;
var cVestibulum= texto.match(/vestibulum/g).length;
var cQuam= texto.match(/quam/g).length;
var cSollicitudin= texto.match(/sollicitudin/g).length;
var cFinibus= texto.match(/finibus/g).length;
var cDictum= texto.match(/dictum/g).length;
var cMorbi= texto.match(/morbi/g).length;
mostrarEnConsola(cSed,cVehicula,cVivamus,cNam,cEros,cVestibulum,cQuam,cSollicitudin,cFinibus,cDictum,cMorbi);
}

function mostrarEnConsola(cSed,cVehicula,cVivamus,cNam,cEros,cVestibulum,cQuam,cSollicitudin,cFinibus,cDictum,cMorbi){
console.log(`%c ${cSed} sed`,'color:#FF5500');
console.log(`%c ${cVehicula} vehicula`,'color:#FF99B2');
console.log(`%c ${cVivamus} vivamus`,'color:#FF99F5');
console.log(`%c ${cNam} nam`,'color:#BB99FF');
console.log(`%c ${cEros} eros`,'color:#99C5FE');
console.log(`%c ${cVestibulum} vestibulum`,'color:#00CEFF');
console.log(`%c ${cQuam} quam`,'color:#01FFFE');
console.log(`%c ${cSollicitudin} sollicitudin`,'color:#00FF9F');
console.log(`%c ${cFinibus} finibus`,'color:#B6FF01');
console.log(`%c ${cDictum} dictum`,'color:#FFFF00');
console.log(`%c ${cMorbi} morbi`,'color:#FFB600');
}



$(document).ready(function () {

    var d = new Date();
    var x = d.getUTCMonth();
    var n = d.getUTCDate();
    var y = d.getFullYear();
    var currentDate = n.toString() + x.toString();

    process(currentDate);

// Giorno per giorno
    var showData_1 = $('#show-data-1');
// La mappa della felicità
    var showData_2 = $('#show-data-2');

// funzione per entrambi i json
      
    function process(currentDate){
    $.getJSON('giornopergiorno.json', function (data) {
      

      var items = data.items.map(function (item) {
        
        if (item.data==currentDate){
        
        
          showData_1.html(item.testo + '<br><br>' + item.autore + '<br>');
        };

      });
      });

      $.getJSON('mappafelicita.json', function (data) {
      

      var items = data.items.map(function (item) {
        
        if (item.data==currentDate){
        
        
          showData_2.html(item.testo + '<br><br>' + item.autore + '<br>');
        };

      });
      });
    };
    
// mostra data

var weekday = new Array(7);
weekday[0]=  "Domenica";
weekday[1] = "Lunedì";
weekday[2] = "Martedì";
weekday[3] = "Mercoledì";
weekday[4] = "Giovedì";
weekday[5] = "Venerdì";
weekday[6] = "Sabato";

var month = new Array();
month[0] = "Gennaio";
month[1] = "Febbraio";
month[2] = "Marzo";
month[3] = "Aprile";
month[4] = "Maggio";
month[5] = "Giugno";
month[6] = "Luglio";
month[7] = "Agosto";
month[8] = "Settembre";
month[9] = "Ottobre";
month[10] = "Novembre";
month[11] = "Dicembre";



// stampa la data odierna al caricamento della pagina
var currentCorrect = weekday[d.getDay()] +" "+ n.toString() +" "+ month[d.getMonth()]+" "+y.toString();
$("#row-date").append(currentCorrect);


//comandi

    $("#prev").click(function(){
      d.setDate(d.getDate() - 1);
      x = d.getUTCMonth();
      n = d.getUTCDate();
      currentDate = n.toString() + x.toString();

      process(currentDate);

      // stampa la data odierna al diminuire del giorno
      currentCorrect = weekday[d.getDay()] +" "+ n.toString() +" "+ month[d.getMonth()]+" "+y.toString();
      $("#row-date").html(currentCorrect);

      });

    $("#next").click(function(){
      d.setDate(d.getDate() + 1);
      x = d.getUTCMonth();
      n = d.getUTCDate();
      currentDate = n.toString() + x.toString();

      process(currentDate);
      
      // stampa la data odierna al aumentare del giorno
      currentCorrect = weekday[d.getDay()] +" "+ n.toString() +" "+ month[d.getMonth()]+" "+y.toString();
      $("#row-date").html(currentCorrect);

      });

  
  
});


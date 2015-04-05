/*
CARTAS PERSONALIDADES
- Nome
- Tipo (espaço grande)
- Anos (o ano que entra em jogo e o ano que sai de jogo)
- Poder especial (terá que ser dividido em dois - um espaço para discrição do poder e outro para a fase em que acontece o poder)
obs: sobre os partido que tem mais facilidade de aquisição, farei da mesma forma que fiz com os Políticos, com um menu específico.
*/
      
var tabela;
d3.tsv("PERSONALIDADES.tsv", function (a) {
  tabela = a;
  // carrega os dados da tabela em TSV
  var cartas = d3.select("div.personalidades").selectAll("div")
    .data(tabela)
    .enter().append("div"); 
  cartas.classed("carta", true); // cada carta

  // nome
  cartas.append("h1").text(function(d) { return d.nome; });
  // tipo
  var tipo = cartas.append("div");
  tipo.classed("tipo", true);
  tipo.each( function(d){
    var icone;
    var cor = "";
    
    switch(d.tipo) {
        case "INTEL" : icone = "fa fa-pencil"; cor = "#663366"; break;
        case "CONTRA" : icone = "fa fa-users"; cor = "#ff0000"; break;
        case "BOLA" : icone = "fa fa-futbol-o"; cor = "#33c6f4"; break;
        case "MIDIA" : icone = "fa fa-microphone"; cor = "#009999"; break;
        case "JUST" : icone = "fa fa-university"; cor = "#cc0000"; break;
        case "AGRO" : icone = "fa fa-pagelines"; cor = "#66cc00"; break;
        case "ARTE" : icone = "fa fa-paint-brush"; cor = "#ff66ff"; break;
        case "ECON" : icone = "fa fa-database"; cor = "#009900"; break;
        case "MKT" : icone = "fa fa-smile-o"; cor = "#ff9900"; break;
        case "BANC" : icone = "fa fa-thumb-tack"; cor = "#b2b2b2"; break;
        case "PLB" : icone = "fa fa-glass"; cor = "#ffcc00"; break;
        case "VRJ" : icone = "fa fa-shopping-cart"; cor = "#cc99ff"; break;
        case "INDU" : icone = "fa fa-building-o"; cor = "#663300"; break;
        case "RLG" : icone = "fa fa-bell"; cor = "#000"; break;
    }
    console.log(d.tipo + " | " + icone);
    d3.select(this).html("<i class='" + icone + "'></i>");
    d3.select(this).style("background-color", cor);
    d3.select(this).style("color", "#fff");
  }); 
  
  var bloco = cartas.append("div");
  bloco.classed("bloco", true);
  
  // anos
  bloco.append("p")
    .text(function(d) { 
      var msg = d.inicio;
      if (d.fim == "-") {
         return msg + "-2014";
      }
      return msg + "-" + d.fim;
    })
    .classed("anos", true);
  // poder
  bloco.append("p")
    .html(function(d) { return d.poder })
    .classed("poder", true);
  
}); // fim criar cartas


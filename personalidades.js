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
        case "INTEL" : icone = "fa fa-book"; cor = "black"; break;
        case "CONTRA" : icone = "fa fa-wrench"; cor = "red"; break;
        case "BOLA" : icone = "fa fa-futbol-o"; cor = "purple"; break;
        case "MIDIA" : icone = "fa fa-film"; cor = "blue"; break;
        case "JUST" : icone = "fa fa-legal"; cor = "#900"; break;
        case "AGRO" : icone = "fa fa-leaf"; cor = "#090"; break;
        case "ARTE" : icone = "fa fa-paint-brush"; cor = "orange"; break;
        case "ECON" : icone = "fa fa-money"; cor = "#090"; break;
        case "MKT" : icone = "fa fa-comments-o"; cor = "#990"; break;
        case "BANC" : icone = "fa fa-credit-card"; cor = "#909"; break;
        case "PLB" : icone = "fa fa-glass"; cor = "blue"; break;
        case "VRJ" : icone = "fa fa-line-chart"; cor = "red"; break;
        case "INDU" : icone = "fa fa-gears"; cor = "grey"; break;
        case "RLG" : icone = "fa fa-plus"; cor = "#090"; break;
    }
    console.log(d.tipo + " | " + icone);
    d3.select(this).html("<i class='" + icone + "'></i>");
    d3.select(this).style("color", cor);
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

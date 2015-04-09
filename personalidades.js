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
    
    switch(d.tipo) 
    {
        case "<P_EDU>" : icone = "fa fa-pencil"; cor = "#663366"; break;
        case "<P_SUB>" : icone = "fa fa-users"; cor = "#ff0000"; break;
        case "<P_ESP>" : icone = "fa fa-futbol-o"; cor = "#33c6f4"; break;
        case "<P_COM>" : icone = "fa fa-microphone"; cor = "#009999"; break;
        case "<P_DIR>" : icone = "fa fa-university"; cor = "#cc0000"; break;
        case "<P_AGR>" : icone = "fa fa-pagelines"; cor = "#66cc00"; break;
        case "<P_ART>" : icone = "fa fa-paint-brush"; cor = "#ff66ff"; break;
        case "<P_FIN>" : icone = "fa fa-credit-card"; cor = "#009900"; break;
        case "<P_PUB>" : icone = "fa fa-smile-o"; cor = "#ff9900"; break;
        case "<P_TEC>" : icone = "fa fa-thumb-tack"; cor = "#b2b2b2"; break;
        case "<P_MAG>" : icone = "fa fa-glass"; cor = "#ffcc00"; break;
        case "<P_VAR>" : icone = "fa fa-shopping-cart"; cor = "#cc99ff"; break;
        case "<P_IND>" : icone = "fa fa-building-o"; cor = "#663300"; break;
        case "<P_REL>" : icone = "fa fa-bell"; cor = "#000"; break;
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


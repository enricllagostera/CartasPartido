/*
OPERAÇÕES PF (24 un.)
- operacao
- Indiciado 1
- indiciado 2
- indiciado 3
*/
      
var tabela;
d3.tsv("JUIZES.tsv", function (a) {
  tabela = a;
  // carrega os dados da tabela em TSV
  var cartas_juizes = d3.select("div.juizes").selectAll("div")
    .data(tabela)
    .enter().append("div"); 
  cartas_juizes.classed("carta", true); // cada carta

  // nome
  cartas_juizes.append("h1").text(function(d) { return d.juiz; });
  
  var tipo = cartas_juizes.append("div").html("<span>STF</span>");
  tipo.classed("tipo stf", true);
  
  var bloco = cartas_juizes.append("div");
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
    .classed("colEsquerda", true);
  
  // influencia
  bloco.append("p")
    .html(function(d) {
    if(d.influencia != "-") {
      if(d.espacos == 0) {
        return "Influência permanente do " + d.influencia + ".";
      }
      return "Influência inicial do " + d.influencia + ".";
    }
    else {
      if(d.espacos == 0) {
        return "Não pode sofrer influência.";
      }
      return "Sem influência inicial.";
    }
  })
  .classed("poder", true);
  
  bloco.append("div")
    .html(function(d) {
      var esp = "";
      for(var i = 0; i < d.espacos; i++){
        esp += "<span></span>";
      }
      return esp;
    })
    .classed("espacos", true);
}); // fim criar cartas

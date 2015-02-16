/*
OPERAÇÕES PF (24 un.)
- operacao
- Indiciado 1
- indiciado 2
- indiciado 3
*/
      
var tabela;
d3.tsv("/dados/OPERACOES PF.tsv", function (a) {
  tabela = a;
  // carrega os dados da tabela em TSV
  var cartas = d3.select("body").selectAll("div")
    .data(tabela)
    .enter().append("div"); 
  cartas.classed("carta", true); // cada carta

  // nome
  cartas.append("h1").text(function(d) { return d.operacao; });
  
  var bloco = cartas.append("div");
  bloco.classed("bloco", true);
  
  bloco.append("p").html(function(d) { 
      var res = "<strong>Indiciado 1:</strong> " + d.Indiciado_1;
      if(d.indiciado_2 == "")
          return res;
      res += "<br/><strong>Indiciado 2:</strong> " + d.indiciado_2;
      if(d.indiciado_3 == "")
        return res;
      return res + "<br/><strong>Indiciado 3:</strong> " + d.indiciado_3;
  });
  
  /*
  // indiciado 1
  cartas.append("p")
    .html(function(d) { 
      return "<strong>Indiciado 1:</strong> " + d.Indiciado_1 })
    .classed("indiciado1", true);
  
  // indiciado 2
  cartas.append("p")
    .html(function(d) { 
      if(d.indiciado_2 == "")
        return "";
    return "<strong>Indiciado 2:</strong> " + d.indiciado_2 })
    .classed("indiciado2", true);
  
  // indiciado 3
  cartas.append("p")
    .html(function(d) { 
      if(d.indiciado_3 == "")
        return "";
    return "<strong>Indiciado 3:</strong> " + d.indiciado_3 })
    .classed("indiciado3", true);
 */ 
}); // fim criar cartas
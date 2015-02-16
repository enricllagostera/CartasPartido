/*
CPIS (64 un.)
- cpi
- Indiciado 1
- indiciado 2
- indiciado 3
*/
      
var tabela;
d3.tsv("../CartasPartido/dados/CPIS.tsv", function (a) {
  tabela = a;
  // carrega os dados da tabela em TSV
  var cartas = d3.select("div.cpis").selectAll("div")
    .data(tabela)
    .enter().append("div"); 
  cartas.classed("carta", true); // cada carta

  // nome
  cartas.append("h1").text(function(d) { return d.cpi; });
  
  var tipo = cartas.append("div").html("<span>CPI</span>");
  tipo.classed("tipo", true);
  
  var bloco = cartas.append("div");
  bloco.classed("bloco", true);
  
  bloco.append("p").html(function(d) { 
      var res = "<strong>Indiciado 1:</strong> " + d.indiciado1;
      if(d.indiciado2 == "")
          return res;
      res += "<br/><strong>Indiciado 2:</strong> " + d.indiciado2;
      if(d.indiciado3 == "")
        return res;
      return res + "<br/><strong>Indiciado 3:</strong> " + d.indiciado3;
  });
}); // fim criar cartas

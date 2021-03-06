/*
CARTA POLÍTICOS:
- Nome
- Partido (espaço grande, pois pode ser coberto por uma ficha de outro partido, e é visualmente a informação mais importante da carta)
- Verba
- Anos (o ano que entra em jogo e o ano que sai de jogo)
- Partidos possíveis de aquisição (estou na dúvida se deixo essa informação na carta ou crio um menu pra cada jogador de possíveis aquisições por partido, estou propenso mais para a segunda opção - por mim, pode elaborar sem esta informação, acho que vai poluir demais a carta)
- Votos (essa acho interessante que fique, apesar de poder ter um menu também)
- Poder especial (terá que ser dividido em dois - um espaço para discrição do poder e outro para a fase em que acontece o poder)
*/
      
var tabela;
d3.tsv("POLITICOS.tsv", function (a) {
  tabela = a;
  // carrega os dados da tabela em TSV
  var cartas = d3.select("div.politicos").selectAll("div")
    .data(tabela)
    .enter().append("div"); 
  cartas.classed("carta", true); // cada carta

  // nome
  cartas.append("h1").text(function(d) { return d.nome; });
  // partido
  var partido = cartas.append("h2");
  partido.text(function(d) {
    return d.partido; });
  partido.each(function(d){
    d3.select(this).classed(d.partido, true);
  });
  
  var bloco = cartas.append("div");
  bloco.classed("bloco", true);
  
  // estado
  bloco.append("p")
    .text(function(d) { return d.estado; })
    .classed("colEsquerda", true);
  // verba
  bloco.append("p")
    .text(function(d) { return "$ " + d.verba; })
    .classed("colEsquerda", true);
  // etapa
  bloco.append("p")
    .text(function(d) { return "E: " + d.momento_poder; })
    .classed("colEsquerda", true);
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
  // poder
  bloco.append("p")
    .html(function(d) { return legenda.converter(d.poder)})
    .classed("poder", true);
  // voto
  var votos = cartas.append("table").classed("votos", true);
  var votos_ano = votos.append("tr").classed("votos_ano", true);
  var votos_valores = votos.append("tr").classed("votos_valores", true);
  for(var i = 1990; i < 2015; i += 4) {
    votos_ano.append("td").text(""+i);
    votos_valores.append("td").text(function(d) { 
      var est = (d["voto_estado_" + i] != "")? d["voto_estado_" + i] : 0;
      var pre = (d["voto_pres_" + i] != "")? d["voto_pres_" + i] : 0;
      if (pre == undefined) pre = 0;
      return est + " | " + pre; 
    });
  }
}); // fim criar cartas

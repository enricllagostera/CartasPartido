/*
### EVENTOS (100 un.)

- Nome
- Data
- Efeito
- Permanência
*/     
var tabela_eventos;

d3.tsv("/dados/EVENTOS.tsv", function (a) {
  tabela_eventos = a;
  // carrega os dados da tabela em TSV
  var cartas_eventos = d3.select("div.eventos").selectAll("div")
    .data(tabela_eventos)
    .enter().append("div"); 
  cartas_eventos.classed("carta", true); // cada carta

  // nome
  cartas_eventos.append("h1").text(function(d) { return d.evento; });
  
  var tipo_evento = cartas_eventos.append("div").html(function(d) {
    return "<span>" + d.data + "</span>";
  });
  tipo_evento.classed("tipo evento", true);
  
  var bloco = cartas_eventos.append("div");
  bloco.classed("bloco", true);
  
  bloco.append("p").html(function(d) { 
    var res = "";
    if(d.perm != "") {
      res += "<strong>Permanente</strong><br/><br/>";
    }
    return res + d.efeito;
  });
}); // fim criar cartas_eventos
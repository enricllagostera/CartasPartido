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
  var cartas = d3.select("body").selectAll("div")
    .data(tabela_eventos)
    .enter().append("div"); 
  cartas.classed("carta", true); // cada carta

  // nome
  cartas.append("h1").text(function(d) { return d.evento; });
  
  var tipo_evento = cartas.append("div").html(function(d) {
    return "<span>" + d.data + "</span>";
  });
  tipo_evento.classed("tipo evento", true);
  
  var bloco = cartas.append("div");
  bloco.classed("bloco", true);
  
  bloco.append("p").html(function(d) { 
    var res = "";
    if(d.perm != "") {
      res += "<strong>Permanente</strong><br/><br/>";
    }
    return res + d.efeito;
  });
}); // fim criar cartas
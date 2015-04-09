var legenda = {};
d3.tsv("LEGENDAS.tsv", function(linhas) {
  //console.log(linhas);
  legenda.db = linhas;
  legenda.estilizar = function (original) {
    for(var i = 0; i < legenda.db.length; i++) {
      if(legenda.db[i].id == original) {
        return legenda.db[i].resumido;
      }
    }
  }
  
  legenda.converter = function (base) {
    var novo = base;
    var patt = /(<.?.?.?.?.?>)/g;
    var res;
    while ((res = patt.exec(base)) != null)  
    {
      if(res[0] != "<i>" && res[0] != "</i>" &&  res[0] != "</b>" && res[0] != "</b>" )
        novo = novo.replace(res[0], legenda.estilizar(res[0]));
    }
    return novo
  }
});



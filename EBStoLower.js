var cities = ["İstanbul","Albania","Algeria","Isparta","Şırnak","Anguilla"];

cities = cities.map(function(x){ return x.toLowerCase(); })


toUpper = function(x){ 
  return x.toLowerCase();
};
cities = cities.map(toUpper);

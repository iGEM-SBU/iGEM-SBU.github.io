// Requires jquery!
var IDarray = ["#admitted", "#bakesale", "#wtchs", "#chs", "#makers", "#fresh", "#nhsp", "#dnalc", "#smithtown", "#ecolibuds", "#lavalle", "#girlsinc", "#stepbnl", "#istem"]

for(var i=0; i<IDarray.length; i++){
  var imgID = IDarray[i] + "img";
  $(imgID).click(function() {
      $('html,body').animate({
          scrollTop: $(IDarray[i]).offset().top},
          'slow');
  });
}

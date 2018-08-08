// Requires jquery!
var IDarray = ["#admitted", "#bakesale", "#wtchs", "#chs", "#makers", "#fresh", "#nhsp", "#dnalc", "#smithtown", "#ecolibuds", "#lavalle", "#girlsinc", "#stepbnl", "#istem"]

for(var i=0; i<IDarray.length; i++){
  var section = IDarray[i];
  var imgID = section + "img";
  console.log(imgID);
  console.log(section)
  $(imgID).click(function() {
      $('html,body').animate({scrollTop: $(section).offset().top}, 'slow');
  });
}

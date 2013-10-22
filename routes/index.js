
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: "Magellan's Voyage", 
  	sub: "the beginning",
  	next: "Seville",
  	next_id: "seville"
  });
};
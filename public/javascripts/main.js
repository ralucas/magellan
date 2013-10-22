$(function(){

	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);
	$cities = $('#cities');

	$('.next').on('click', function(){
		var dataPlace = $(this).attr('data-place');
		console.log(dataPlace);
		$.get('/loc', {next : dataPlace}, function (data){
			console.log(data);
			var context = data;
			var html = template(context);
			$cities.html(html);
			console.log(context);
			console.log(html);
		});
	});
});
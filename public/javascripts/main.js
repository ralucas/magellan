$(function(){

	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);
	$cities = $('#cities');

	$('.container').on('click', '.next', function(){
		var dataPlace = $(this).attr('data-place');
		$.get('/loc', {next : dataPlace}, function (data){
			var context = data;
			var html = template(context);
			$cities.html(html);
		});
	});
});
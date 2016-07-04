var symbolCounter = 0;
$('svg symbol').each(function(){
	//count icons
	//console.log($(this) + " " + symbolCounter + ": " + $(this).attr('id'))
	//symbolCounter ++
	// print icons on page:
	var iconName = $(this).attr('id').slice(5)
	$('#icon-holder').append('<div class="icon-thumb"><svg class="icon"><use xlink:href="#'+$(this).attr('id')+'" /></svg><p>'+iconName+'</p></div>');
})
function updateOutput(){
	//output panel to get updated by html entere in html panel and css too
	$('iframe').contents().find('html').html("<html><head><style type='text/css'>" + $('#cssPanel').val() + "</style></head><body>" + $('#htmlPanel').val() + "</body></html>");

	//now target the javascript using eval
	document.getElementById('outputPanel').contentWindow.eval($('#javascriptPanel').val());
}


$('.toggleButton').hover(function(){
	$(this).addClass('highlightedButton');
}, function(){
	$(this).removeClass('highlightedButton');
});

$('.toggleButton').click(function(){
	$(this).toggleClass('active');
	$(this).removeClass('highlightedButton');

	//show the text area per button selected
	var panelId = $(this).attr('id') + 'Panel';
	$('#' + panelId).toggleClass('hidden');

	//keep track of hidden and active divs to display 
	var numberOfActivePanels = 4 - $('.hidden').length;
	$('.panel').width(($(window).width() / numberOfActivePanels)- 5);
});

//set the size of the html text area to be equal to 
//the height of the page - height of the header
$('textarea').height($(window).height() - $('#header').height() - 20);

//same logic but for the width now
$('.panel').width(($(window).width() / 2)- 5);

updateOutput();

//trigger change in the html textarea 
$('textarea').on('change keyup paste', function(){
	//output panel to get updated by html entere in html panel
	// $('iframe').contents().find('html').html($('#htmlPanel').val());

	updateOutput();

});
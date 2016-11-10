function sideMenu(){
	$('.secondary-menu ').append('<div class="arrow"></div>');
	$('.arrow').on('click', function(){
		$('.secondary-menu ').toggleClass('active');
	});
};


$(document).ready(function(){
sideMenu();
});

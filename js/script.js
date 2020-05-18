$(window).on("load",function(){
	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});

})

$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});
});


function yourFunction() {

$(".MainTitle").letterfx({"fx":"wave","letter_end":"rewind","fx_duration":"300ms"});

setTimeout("yourFunction()", 3000);

}
yourFunction();

$('.owl-carousel').owlCarousel({
	    autoplay: 4000,
	    loop:true,
	    items: 1,
    	nav:true,
    	dots:true,
    	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
	})

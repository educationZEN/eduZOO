$(document).ready(function() {
	$("nav#navigation").append('<ul class="navigation"></ul>');
	$.each($("h2"), function(indexInArray, valueOfElement) {
		if(valueOfElement.id!='')
		$("ul.navigation").append('<li><a class="scroll" href="#' + valueOfElement.id + '">' + valueOfElement.innerHTML + "</a></li>");
	});
	
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});

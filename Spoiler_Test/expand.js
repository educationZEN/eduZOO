$(document).ready(function() {
  $(".expandable-content").hide();
  $(".expandable-content").before("<div class=\"expandable-header\"><div class=\"centered\"><div class=\"expandable-button collapsed\"></div></div></div>");
  //toggle the componenet with class msg_body
  $(".expandable-button").click(function()
  {
	$(this).toggleClass("expanded");
	$(this).toggleClass("collapsed");
    $(this).parents(".expandable-header").next(".expandable-content").slideToggle(500);
  });
});

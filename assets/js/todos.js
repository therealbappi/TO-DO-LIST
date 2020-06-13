//check the specific todoas by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
})

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

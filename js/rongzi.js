$(function(){
	$(".finance_box_left").height($(window).height());
				
	$(".finace_title button").click(function(){
		$(".finace_title button").removeClass("finace_active");
		$(this).addClass("finace_active");
	})
	$(".centent_box_btn button").click(function(){
		$(".centent_box_btn button").removeClass("centent_box_btn_active")
		$(this).addClass("centent_box_btn_active")
	})
})
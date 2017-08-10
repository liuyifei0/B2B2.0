$(function(){
	$(".niurou").click(function(){
		$(".shuichan").removeClass("content_active");
		$(".niurou").addClass("content_active");
		$(".content_qiehuan1").removeClass("dis_none")
		$(".content_qiehuan2").addClass("dis_none")
	})
	$(".shuichan").click(function(){
		$(".niurou").removeClass("content_active");
		$(".shuichan").addClass("content_active");
		$(".content_qiehuan1").addClass("dis_none")
		$(".content_qiehuan2").removeClass("dis_none")
	})
	
	$(".radio_qiehuan1").click(function(){
		$(".rongzi_tr1").removeClass("vis_none")
	})
	$(".radio_qiehuan2").click(function(){
		$(".rongzi_tr1").addClass("vis_none")
	})
	$(".radio_qiehuan3").click(function(){
		$(".rongzi_tr2").removeClass("vis_none");
	})
	$(".radio_qiehuan4").click(function(){
		$(".rongzi_tr2").addClass("vis_none");
	})
	
})

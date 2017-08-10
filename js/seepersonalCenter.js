$(function(){
	$(".dis1").hide();
	$(".dis2").hide();
	$(".dis3").hide();
	$(".dis4").hide();
	$(".dis5").hide();
	$(".dis6").hide();
	$(".dis7").hide();
	$(".dis8").hide();
	$(".dis9").hide();
	$(".dis10").hide();
	$(".dis11").hide();
	$(".dis12").hide();
	$(".dis13").hide();
	$(".dis14").hide();
	//用户名
	var usename = $(".change_input_usename");
	var usenametext = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
	//联系电话
	var usetel  = $(".change_input_usetel");
	var useteltext = /^1[34578]\d{9}$/;
	//邮箱
	var useemail = $(".change_input_useemail");
	var useemailtext = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
	//地址 无法验证
	var useadd = $(".change_input_useadd")
	//真实姓名
	var usetruename = $(".change_input_usetruename");
	var usetruenametext = /^[\u4e00-\u9fa5]+$/;
	//身份证号验证
	var usenum = $(".change_input_usenum");
	var usenumtext = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
	//企业名称
	var useqiyename = $(".change_input_qiyename");
	var useqiyenametext = /^[\u4e00-\u9fa5]+$/;
	//企业注册资金
	var usehowmoney = $(".change_input_howmoney");
	var usehowmoneytext = /^\d+$/;
	
	
	
	usename.blur(function(){
		var str1 = usename.val()
		if(str1=='' || str1 == null){
			usename.css("border","1px solid #fa3042");
			usename.attr("placeholder","请输入正确的用户名");
			$(".dis2").show();
			$(".dis1").hide();
		}else{
			usename.css("border","1px solid #ddd");
			$(".dis2").hide();
			$(".dis1").hide();
		};
		
		if(!usenametext.test(str1)){
			$(".dis2").show();
			$(".dis1").hide();
		}else{
			$(".dis2").hide();
			$(".dis1").show();
		}
	});
	
	
	
	usetel.blur(function(){
		var str2 = usetel.val();
		if(usetel.val()=='' || usetel == null){
			usetel.css("border","1px solid #fa3042");
			usetel.attr("placeholder","请输入正确的手机号");
			$(".dis4").hide();
			$(".dis3").show();
		}else{
			usetel.css("border","1px solid #ddd");
			$(".dis4").hide();
			$(".dis3").hide();
		}
		if(!useteltext.test(str2)){
			$(".dis4").show();
			$(".dis3").hide();
		}else{
			$(".dis4").hide();
			$(".dis3").show();
		}
	});	
	
	
	useemail.blur(function(){
		var str3 = useemail.val();
		if(useemail.val()=='' || useemail == null){
			useemail.css("border","1px solid #fa3042");
			useemail.attr("placeholder","请输入正确的邮箱地址");
			$(".dis6").show();
			$(".dis5").hide();
		}else{
			useemail.css("border","1px solid #ddd");
			$(".dis6").hide();
			$(".dis5").hide();
		}
		if(!useemailtext.test(str3)){
			$(".dis6").show();
			$(".dis5").hide();
		}else{
			$(".dis5").show();
			$(".dis6").hide();
		}
	});	
	
	
	useadd.blur(function(){
		var str4 = useadd.val()
		if(str4=='' || str4 == null){
			useadd.css("border","1px solid #fa3042");
			useadd.attr("placeholder","请输入详细地址");
		}else{
			useadd.css("border","1px solid #ddd");
		};
	});
	
	
	usetruename.blur(function(){
		var str5 = usetruename.val();
		if(str5=='' || str5 == null){
			usetruename.css("border","1px solid #fa3042");
			usetruename.attr("placeholder","请输入正确的姓名");
			$(".dis8").show();
			$(".dis7").hide();
		}else{
			usetruename.css("border","1px solid #ddd");
			$(".dis8").hide();
			$(".dis7").hide();
		};
		if(!usetruenametext.test(str5)){
			$(".dis8").show();
			$(".dis7").hide();
		}else{
			$(".dis8").hide();
			$(".dis7").show();
		}
	})
	
	usenum.blur(function(){
		var str6 = usenum.val()
		if(str6=='' || str6 == null){
			usenum.css("border","1px solid #fa3042");
			usenum.attr("placeholder","请输入正确的身份证号");
			$(".dis10").show();
			$(".dis9").hide();
		}else{
			usenum.css("border","1px solid #ddd");
			$(".dis10").hide();
			$(".dis9").hide();
		};
		
		if(!usenumtext.test(str6)){
			$(".dis10").show();
			$(".dis9").hide();
		}else{
			$(".dis10").hide();
			$(".dis9").show();
		}
	});
	
	

	
	
	
	
	var active1 = $(".active_span1");
	active1.click(function(){
		usename.removeAttr("disabled");
		active1.hide();
		$(".active_btn_box1").show();
		usename.removeClass("removeclass1");
		usename.focus()
	})
	$(".active_btn1").click(function(){
		usename.attr("disabled","disabled")
		usename.addClass("removeclass1")
		$(".active_btn_box1").hide();
		active1.show()
		
	})
	$(".active_btn2").click(function(){
		usename.attr("disabled","disabled")
		usename.addClass("removeclass1")
		$(".active_btn_box1").hide();
		active1.show()
	})
	
	
	
	var active2 = $(".active_span2");
	active2.click(function(){
		usetel.removeAttr("disabled");
		active2.hide();
		$(".active_btn_box2").show();
		usetel.removeClass("removeclass1");
		usetel.focus()
	})
	$(".active_btn3").click(function(){
		usetel.attr("disabled","disabled")
		usetel.addClass("removeclass1")
		$(".active_btn_box2").hide();
		active2.show() 
	})
	$(".active_btn4").click(function(){
		usetel.attr("disabled","disabled")
		usetel.addClass("removeclass1")
		$(".active_btn_box2").hide();
		active2.show()
	})
	
	
	var active3 = $(".active_span3");
	active3.click(function(){
		useemail.removeAttr("disabled");
		active3.hide();
		$(".active_btn_box3").show();
		useemail.removeClass("removeclass1");
		useemail.focus()
	})
	$(".active_btn5").click(function(){
		useemail.attr("disabled","disabled")
		useemail.addClass("removeclass1")
		$(".active_btn_box3").hide();
		active3.show();
		
	})
	$(".active_btn6").click(function(){
		useemail.attr("disabled","disabled")
		useemail.addClass("removeclass1")
		$(".active_btn_box3").hide();
		active3.show();
	});
	
	var active4 = $(".active_span4");
	active4.click(function(){
		useadd.removeAttr("disabled");
		active4.hide();
		$(".active_btn_box4").show();
		useadd.removeClass("removeclass1");
		useadd.focus()
		$(".vis_none").css("visibility","visible")
		
	})
	$(".active_btn7").click(function(){
		useadd.attr("disabled","disabled")
		useadd.addClass("removeclass1")
		$(".active_btn_box4").hide();
		active4.show();
		$(".vis_none").css("visibility","hidden")
	})
	$(".active_btn8").click(function(){
		useadd.attr("disabled","disabled")
		useadd.addClass("removeclass1")
		$(".active_btn_box4").hide();
		active4.show();
		$(".vis_none").css("visibility","hidden")
	})
	
	
	
	
	
	
	
	
})

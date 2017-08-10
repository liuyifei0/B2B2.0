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
	
	//正则判断提交
	$(".sub_btn").attr("disabled","disabled");
	$(".sub_btn").css("background","#ddd")
//	$(".sub_btn").removeAttr("disabled")
//	$(".sub_btn").css("background","#0591fb")
	
	
	function checkUsename(){
		var str1 = usename.val()
		usename.css("border","1px solid #fa3042");
		if(str1=='' || str1 == null){
			usename.css("border","1px solid #fa3042");
			usename.attr("placeholder","请输入正确的用户名");
			$(".dis2").show();
			$(".dis1").hide();
			return false;
		}else if(!usenametext.test(str1)){
			usename.css("border","1px solid #fa3042");
			usename.attr("placeholder","请输入正确的用户名");
			$(".dis2").show();
			$(".dis1").hide();
			return false;
		}else{
			usename.css("border","1px solid #ddd");
			$(".dis2").hide();
			$(".dis1").show();
			return true;
			
		};
	}
	
	function checkUsetel(){
		var str2 = usetel.val();
		if(usetel.val()=='' || usetel == null){
			usetel.css("border","1px solid #fa3042");
			usetel.attr("placeholder","请输入正确的手机号");
			$(".dis4").show();
			$(".dis3").hide();
			return false;
		}else if(!useteltext.test(str2)){
			$(".dis4").show();
			$(".dis3").hide();
			usetel.css("border","1px solid #fa3042");
			usetel.attr("placeholder","请输入正确的手机号");
			return false;
		}else{
			$(".dis4").hide();
			$(".dis3").show();
			usetel.css("border","1px solid #ddd");
			return true;
		}
	}
	
	function checkUseemail(){
		var str3 = useemail.val();
		if(useemail.val()=='' || useemail == null){
			useemail.css("border","1px solid #fa3042");
			useemail.attr("placeholder","请输入正确的邮箱地址");
			$(".dis6").show();
			$(".dis5").hide();
			return false;
		}else if(!useemailtext.test(str3)){
			$(".dis6").show();
			$(".dis5").hide();
			useemail.css("border","1px solid #fa3042");
			useemail.attr("placeholder","请输入正确的邮箱地址");
			return false;
		}else{
			useemail.css("border","1px solid #ddd");
			$(".dis5").show();
			$(".dis6").hide();
			return true;
		}
	}
	
	function aaaddressShi(){
		if($(".address_shi").val()==""){
			return false;
			alert(111)
		}else{
			return true;
			alert(222)
		}
	};
	
	function aaaddressXian(){
		if($(".address_xian").val()==1){
			return false;
		}else{
			return true;
		}
	}
	
	function checkUseadd(){
		var str4 = useadd.val()
		if(str4=='' || str4 == null){
			useadd.css("border","1px solid #fa3042");
			useadd.attr("placeholder","请输入详细地址");
			return false;
		}else{
			useadd.css("border","1px solid #ddd");
			return true;
		};
	}
	
	function checkUsetruename(){
		var str5 = usetruename.val();
		if(str5=='' || str5 == null){
			usetruename.css("border","1px solid #fa3042");
			usetruename.attr("placeholder","请输入正确的姓名");
			$(".dis8").show();
			$(".dis7").hide();
		}else if(!usetruenametext.test(str5)){
			$(".dis8").show();
			$(".dis7").hide();
			usetruename.css("border","1px solid #fa3042");
			usetruename.attr("placeholder","请输入正确的姓名");
			return false;
		}else{
			$(".dis8").hide();
			$(".dis7").show();
			usetruename.css("border","1px solid #ddd");
			return true;
		};
	}
	
	function checkUsenum(){
		var str6 = usenum.val()
		if(str6=='' || str6 == null){
			usenum.css("border","1px solid #fa3042");
			usenum.attr("placeholder","请输入正确的身份证号");
			$(".dis10").show();
			$(".dis9").hide();
		}else if(!usenumtext.test(str6)){
			$(".dis10").show();
			$(".dis9").hide();
			return false;
		}else{
			usenum.css("border","1px solid #ddd");
			$(".dis10").hide();
			$(".dis9").show();
			return true;
		};
	}
	
	function checkUseqiyename(){
		var str7 = useqiyename.val();
		if(str7=='' || str7 == null){
			useqiyename.css("border","1px solid #fa3042");
			useqiyename.attr("placeholder","请输入正确的企业名称");
			$(".dis11").hide();
			$(".dis12").show();
		}else if(!useqiyenametext.test(str7)){
			$(".dis12").show();
			$(".dis11").hide();
			return false;
		}else{
			useqiyename.css("border","1px solid #ddd");
			$(".dis12").hide();
			$(".dis11").show();
			return true;
		}
	}
	
	function checkUsehowmoney(){
		var str8 = usehowmoney.val();
		if(str8=='' || str8 == null){
			usehowmoney.css("border","1px solid #fa3042");
			usehowmoney.attr("placeholder","请输入金额");
			$(".dis13").hide();
			$(".dis14").show();
		}else if(!usehowmoneytext.test(str8)){
			$(".dis14").show();
			$(".dis13").hide();
			return false;
		}else{
			usehowmoney.css("border","1px solid #ddd");
			$(".dis14").hide();
			$(".dis13").show();
			return true;
		}
	}
	
	
	usename.blur(function(){
//		checkUsename()
		if(checkUsename()&&checkUsetel()&&checkUseemail()&&aaaddressShi()&&checkUseadd()&&checkUsetruename()&&checkUsenum()&&checkUseqiyename()&&checkUsehowmoney()){
			$(".sub_btn").removeAttr("disabled")
			$(".sub_btn").css("background","#0591fb")
		}else{
			$(".sub_btn").attr("disabled","disabled");
			$(".sub_btn").css("background","#ddd")
		}
	});
	
	usetel.blur(function(){
//		checkUsetel()
		if(checkUsename()&&checkUsetel()&&checkUseemail()&&aaaddressShi()&&checkUseadd()&&checkUsetruename()&&checkUsenum()&&checkUseqiyename()&&checkUsehowmoney()){
			$(".sub_btn").removeAttr("disabled")
			$(".sub_btn").css("background","#0591fb")
		}else{
			$(".sub_btn").attr("disabled","disabled");
			$(".sub_btn").css("background","#ddd")
		}
	});	
	useemail.blur(function(){
//		checkUseemail()
		if(checkUsename()&&checkUsetel()&&checkUseemail()&&aaaddressShi()&&checkUseadd()&&checkUsetruename()&&checkUsenum()&&checkUseqiyename()&&checkUsehowmoney()){
			$(".sub_btn").removeAttr("disabled")
			$(".sub_btn").css("background","#0591fb")
		}else{
			$(".sub_btn").attr("disabled","disabled");
			$(".sub_btn").css("background","#ddd")
		}
	});	
	$(".address_shi").change(function(){
//		aaaddressShi()
		if(checkUsename()&&checkUsetel()&&checkUseemail()&&aaaddressShi()&&checkUseadd()&&checkUsetruename()&&checkUsenum()&&checkUseqiyename()&&checkUsehowmoney()){
			$(".sub_btn").removeAttr("disabled")
			$(".sub_btn").css("background","#0591fb")
		}else{
			$(".sub_btn").attr("disabled","disabled");
			$(".sub_btn").css("background","#ddd")
		}
	})
//	$(".address_xian").change(function(){
//		aaaddressXian()
//	})
	useadd.blur(function(){
//		checkUseadd()
		if(checkUsename()&&checkUsetel()&&checkUseemail()&&aaaddressShi()&&checkUseadd()&&checkUsetruename()&&checkUsenum()&&checkUseqiyename()&&checkUsehowmoney()){
			$(".sub_btn").removeAttr("disabled")
			$(".sub_btn").css("background","#0591fb")
		}else{
			$(".sub_btn").attr("disabled","disabled");
			$(".sub_btn").css("background","#ddd")
		}
	});
	usetruename.blur(function(){
//		checkUsetruename()
		if(checkUsename()&&checkUsetel()&&checkUseemail()&&aaaddressShi()&&checkUseadd()&&checkUsetruename()&&checkUsenum()&&checkUseqiyename()&&checkUsehowmoney()){
			$(".sub_btn").removeAttr("disabled")
			$(".sub_btn").css("background","#0591fb")
		}else{
			$(".sub_btn").attr("disabled","disabled");
			$(".sub_btn").css("background","#ddd")
		}
	});
	usenum.blur(function(){
//		checkUsenum();
		if(checkUsename()&&checkUsetel()&&checkUseemail()&&aaaddressShi()&&checkUseadd()&&checkUsetruename()&&checkUsenum()&&checkUseqiyename()&&checkUsehowmoney()){
			$(".sub_btn").removeAttr("disabled")
			$(".sub_btn").css("background","#0591fb")
		}else{
			$(".sub_btn").attr("disabled","disabled");
			$(".sub_btn").css("background","#ddd")
		}
		
	});
	useqiyename.blur(function(){
//		checkUseqiyename()
		if(checkUsename()&&checkUsetel()&&checkUseemail()&&aaaddressShi()&&checkUseadd()&&checkUsetruename()&&checkUsenum()&&checkUseqiyename()&&checkUsehowmoney()){
			$(".sub_btn").removeAttr("disabled")
			$(".sub_btn").css("background","#0591fb")
		}else{
			$(".sub_btn").attr("disabled","disabled");
			$(".sub_btn").css("background","#ddd")
		}
	
	});	
	usehowmoney.blur(function(){
//		checkUsehowmoney()
		if(checkUsename()&&checkUsetel()&&checkUseemail()&&aaaddressShi()&&checkUseadd()&&checkUsetruename()&&checkUsenum()&&checkUseqiyename()&&checkUsehowmoney()){
			$(".sub_btn").removeAttr("disabled")
			$(".sub_btn").css("background","#0591fb")
		}else{
			$(".sub_btn").attr("disabled","disabled");
			$(".sub_btn").css("background","#ddd")
		}
	});	
	
	
	
	
})

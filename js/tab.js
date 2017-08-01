$(function(){
	//JW11_1页面点击确认签入弹层
	$('#confirm').click(function(){
		$('#WJ11_layer').css('display','block');
	})
	$('#cancel').click(function(){
		$('#WJ11_layer').css('display','none');
	})
	//JW10页面tab切换
	$('.JW10_tab li').click(function(){
		$('.JW10_wrap').css('display','none');
		$('.JW10_wrap').eq($(this).index()).css('display','block');
		$('.JW10_tab li img').eq(0).attr('src','../images/icon/saoma1.png');
		$('.JW10_tab li img').eq(1).attr('src','../images/icon/banji1.png');
		$('.JW10_tab li img').eq(2).attr('src','../images/icon/wode1.png');
		if(($(this).index())==0){
			$('.JW10_tab li img').eq($(this).index()).attr('src','../images/icon/saoma2.png');
			$('.state_title').text('扫码验证');
		}else if(($(this).index())==1){
			$('.JW10_tab li img').eq($(this).index()).attr('src','../images/icon/banji2.png');	
			$('.state_title').text('当前班级');
		}else{
			$('.JW10_tab li img').eq($(this).index()).attr('src','../images/icon/wode2.png');				
			$('.state_title').text('我的');
		}
		$('.JW10_tab li span').css('color','#000');
		$('.JW10_tab li span').eq($(this).index()).css('color','#30D380');
	})
	//D40页面tab切换
	$('#classStatus li').click(function(){
		$('#classStatus li').removeClass('D40Selected');
		$(this).addClass('D40Selected');
		$('.D40_wrap').css('display','none');
		$('.D40_wrap').eq($(this).index()).css('display','block');
	})
	//点击签到码弹层
	$('.D40BottomRight').click(function(){
		$('.D40_layer').css('display','block');
		$('.close').click(function(){
			$('.D40_layer').css('display','none');
		})
	})
})
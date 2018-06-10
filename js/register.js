$(function () {
	var suMready = false, startReady = true, timer = null;
	//发送验证码
	$('.verify').click(function () {
		if (!isPhoneAvailable($('.tel').val()) || !startReady) return;
		timeFn();
		$.ajax({
			url: apiTestBathPath + '/app/v1/sendVerifyCode',
			data: {
				mobile: $('.tel').val()
			},
			success: function (res) {
				if (res.code  == 0) {
					suMready = true
				}

			}
		})
	})

	//发送时间
	function timeFn() {
		$('.verify').html('120s重新发送');
		var sec = 120;
		startReady = false;
		clearInterval(timer);
		timer = setInterval(function () {
            --sec;
            if (sec == 0) {
            	clearInterval(timer);
            	$('.verify').html('重新发送');
            	startReady = true;
            	sec = 120;
            } else {
            	 $('.verify').html(sec + 's重新发送');
            }
		}, 1000)
	}
     
     //提交
    $('.btn-submit').click(function () {
    	if (!isPhoneAvailable($('.tel').val()) && !suMready) return;
    	$.ajax({
	    	url: apiTestBathPath + '/app/v1/login',
	    	data: {
	    		code: $('.code').val(),
	    		inviteCode: getUrlParam('inviteCode'),
	    		mobile: $('.tel').val()
	    	},
	    	type: 'POST',
	    	success: function (res) {
                if (res.code == 0) {
                	suMready = false;
            		window.open('./success.html', '_self')	;
                }
	    	}
	    })
    })
    

    




})
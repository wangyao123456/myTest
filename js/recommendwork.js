$(function () {
    var companyLogo = 'http://nhh-image.oss-cn-shanghai.aliyuncs.com/mini-app/images/default-c.png';//公司默认的头像
    var photo = 'http://nhh-image.oss-cn-shanghai.aliyuncs.com/mini-app/images/default-p.png';//分享人默认的头像
    // var shareUserId, shareJid;
	$.ajax({
		url: apiTestBathPath + '/app/share/getShareJobDetail',
		data: {
			userId: getUrlParam('userId'),
			jid: getUrlParam('postId')
		},
		success: function (res) {
			var nowSalary, nowTime;
			// shareUserId = res.data.userId;
			// shareJid = res.data.jobDetail.jid;

			if (res.data.jobDetail.wagemax == 0) {
				nowSalary = '面议'
			} else {
				nowSalary = res.data.jobDetail.wagemin + 'k-' + res.data.jobDetail.wagemax + 'k';
			}

			var date = new Date();
            var m = toDou(date.getMonths() + 1);
            var d = toDou(date.getDate());
            var md = m + '-' + d;
            var publishDate = res.data.jobDetail.published_text_second;

            if (publishDate.indexOf(md) > -1) {
            	nowTime = publishDate.substring(0, 5);
            } else {
            	nowTime = publishDate
            }

			$('.time').html(nowTime);	
			$('.name').html(res.data.name);
			$('.salary').html(nowSalary);
			$('.post').html(res.data.jobDetail.position);
			$('.year').html(res.data.jobDetail.workexp_text);
			$('.education').html(res.data.jobDetail.edu_text);
			$('.company').html(res.data.jobDetail.companyName);
			$('.area').html(res.data.jobDetail.prov + '-' + res.data.jobDetail.city);
			$('.photo-img').css('background-image', 'ulr('+ (res.data.avatar || photo) +')');
			$('.logo').css('background-image', 'ulr('+ (res.data.jobDetail.companyLogo || companyLogo) +')');
		}
	})

	
    




})
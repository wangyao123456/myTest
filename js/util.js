var apiTestBathPath = 'http://creditapiTest.wnzx.com/credit';

//返回两位数
function toDou(n) {
	return n >= 10 ? n: '0' + n;
}
    
//获取请求参数(直接返回value)
function getUrlParam(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var value = window.location.search.substr(1).match(reg);
    if (value !== null) {
        return decodeURIComponent(value[2]);
    }
    return null;
}


//简易的手机判断
function isPhoneAvailable(str) {  
    if (!str) return;
    str = str.toString();
    var re = /^[1][3,4,5,7,8][0-9]{9}$/;  
    if (!re.test(str)) {  
        return false;  
    } else {  
        return true;  
    }  
}
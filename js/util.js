var apiTestBathPath = 'http://creditapiTest.wnzx.com/credit';

//������λ��
function toDou(n) {
	return n >= 10 ? n: '0' + n;
}
    
//��ȡ�������(ֱ�ӷ���value)
function getUrlParam(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var value = window.location.search.substr(1).match(reg);
    if (value !== null) {
        return decodeURIComponent(value[2]);
    }
    return null;
}


//���׵��ֻ��ж�
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
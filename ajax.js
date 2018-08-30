/**
 * Created by lover star on 2018/5/14.
 */
var ajax = function (method, url, data, success) {
    var xhr = null;
    try {
        xhr = new XMLHttpRequest()
    }catch(e) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
//����ҳ��������ַ���������󣬻ش���Ӧ
    if (method == 'get' && data) {
        url += '?' + data;
    }

    xhr.open(method,url,true);

    if (method == 'get') {
        xhr.send();
    } else {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                success && success(xhr.responseText);
            }
            else {
                alert('ERROR:'+ xhr.status)
            }
        }
    }

};
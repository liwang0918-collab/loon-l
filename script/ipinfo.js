$httpClient.get(“http://ip-api.com/json/?lang=zh-CN”, function(error, response, data) {

let obj = JSON.parse(data);

$done({
title: obj.country,
content: obj.query
});

});

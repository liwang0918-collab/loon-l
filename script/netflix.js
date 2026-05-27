$httpClient.get(“https://www.netflix.com/title/81215567”, function(error, response, data) {

let result = “未解锁”;

if (!error && response.status == 200) {
result = “已解锁”;
}

$done({
title: “Netflix”,
content: result
});

});

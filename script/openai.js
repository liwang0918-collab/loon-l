$httpClient.get(“https://chat.openai.com”, function(error, response, data) {

let result = “未解锁”;

if (!error && response.status == 200) {
result = “已解锁”;
}

$done({
title: “OpenAI”,
content: result
});

});

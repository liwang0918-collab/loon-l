$httpClient.get(“https://chat.openai.com/cdn-cgi/trace”, function(error, response, data) {

let result = “❌”;

if (!error && response.status === 200) {
result = “✅”;
}

$done({
title: “OpenAI”,
content: result,
icon: “brain”,
“icon-color”: “#7B68EE”
});

});

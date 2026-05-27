const start = Date.now();

$httpClient.get(“https://www.gstatic.com/generate_204”, function(error, response, data) {

const ms = Date.now() - start;

$done({
title: “延迟”,
content: ${ms} ms
});

});

$httpClient.get(“https://www.netflix.com/title/81215567”, function(error, response, data) {

let result = “❌”;

if (!error && response.status === 200) {
result = “✅”;
}

$done({
title: “Netflix”,
content: result,
icon: “tv”,
“icon-color”: “#E50914”
});

});

$httpClient.get(“https://www.tiktok.com”, function(error, response, data) {

let result = “❌”;

if (!error && response.status === 200) {
result = “✅”;
}

$done({
title: “TikTok”,
content: result,
icon: “music.note”,
“icon-color”: “#FF1493”
});

});

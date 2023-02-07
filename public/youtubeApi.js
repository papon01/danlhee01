// Function to display the first 5 videos from a user's YouTube channel
function showVideos() {
    gapi.client.init({
        'apiKey': 'AIzaSyBDEXKsKG1mjccq56dkXYGJwS5EwgosANQ',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    }).then(function() {
        return gapi.client.youtube.channels.list({
            "part": "snippet,contentDetails,statistics",
            "mine": true
        });
    }).then(function(response) {
        console.log(response);
        var channel = response.result.items[0];
        console.log(channel);
        var channelId = channel.id;
        console.log(channelId);

        gapi.client.youtube.search.list({
            "part": "snippet",
            "channelId": channelId,
            "maxResults": 5,
            "type": "video"
        }).then(function(response) {
            console.log(response);
            var videos = response.result.items;
            var output = "";
            for (var i in videos) {
                var title = videos[i].snippet.title;
                var videoId = videos[i].id.videoId;
                output += "<li><a href='https://www.youtube.com/watch?v=" + videoId + "'>" + title + "</a></li>";
            }
            document.getElementById("dhsong").innerHTML = "<ol>" + output + "</ol>";
        });
    });
}
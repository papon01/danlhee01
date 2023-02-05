// Google OAuth2.0 authorization
function signInOut() {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: '837943993291-o300pkv2ao8b5d2a8emoaji054euqcpv.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/plus.login'
      });
  
      var auth2 = gapi.auth2.getAuthInstance();
      if (auth2.isSignedIn.get()) {
        auth2.signOut().then(function () {
          console.log('User signed out.');
          document.getElementById('signInOutButton').innerHTML = 'Sign In';
          document.getElementById('signInOutButton').onclick = signIn;
        });
      } else {
        auth2.signIn().then(function () {
          console.log('User signed in.');
          document.getElementById('signInOutButton').innerHTML = 'Sign Out';
          document.getElementById('signInOutButton').onclick = signOut;
        });
        
        //copy paste
        // Function to display user's profile information
            gapi.auth2.getAuthInstance().signIn().then(function() {
                var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
                document.getElementById("dhcontentlabel").innerHTML = "User ID: " + profile.getId();
                document.getElementById("dhcontent").innerHTML = "Full Name: " + profile.getName() + "<br>" + "Email: " + profile.getEmail();
                document.getElementById("profilepiclabel").innerHTML = "Profile Picture";
                document.getElementById("profilepic").innerHTML = "<img src='" + profile.getImageUrl() + "'>";
                document.getElementById("congradmassage").innerHTML = "Login Successful!";
                document.getElementById("headM").innerHTML = z;
                }).catch(function(error) {
                    console.error(error);
                    document.getElementById("congradmassage").innerHTML = "Login failed: " + error;
                });

        }
    });
  }
  
/*
// Function to display user's profile information
function display() {
    gapi.auth2.getAuthInstance().signIn().then(function() {
        var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
        document.getElementById("dhcontentlabel").innerHTML = "User ID: " + profile.getId();
        document.getElementById("dhcontent").innerHTML = "Full Name: " + profile.getName() + "<br>" + "Email: " + profile.getEmail();
        document.getElementById("profilepiclabel").innerHTML = "Profile Picture";
        document.getElementById("profilepic").innerHTML = "<img src='" + profile.getImageUrl() + "'>";
        document.getElementById("congradmassage").innerHTML = "Login Successful!";
        document.getElementById("headM").innerHTML = z;
    }).catch(function(error) {
        console.error(error);
        document.getElementById("congradmassage").innerHTML = "Login failed: " + error;
    });
}

*/


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

const clientId = '837943993291-o300pkv2ao8b5d2a8emoaji054euqcpv.apps.googleusercontent.com';



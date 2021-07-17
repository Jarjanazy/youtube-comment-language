const youtubeApiUrl = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=replies%2C%20snippet';
const apiKey = 'AIzaSyDvEHdQhrNzw1Ksq1PqABCIj4pX1vbZhl8'

const axios = require('axios').default;

const createRequestUrl = function(baseUrl, apiKey, videoId){
    return `${baseUrl}&key=${apiKey}&videoId=${videoId}`;
}

const getCommentsFromResponse = function(response){
    return response.data
    .items
    .map(i => i.snippet.topLevelComment.snippet.textDisplay);
}


// Make sure the client is loaded before calling this method.
const getCommentsByVideoId = function(videoId) {
    const requestUrl = createRequestUrl(youtubeApiUrl, apiKey, videoId);
    axios
      .get(requestUrl)
      .then(response => console.log(getCommentsFromResponse(response)));
}

export default ({
    getCommentsByVideoId
});

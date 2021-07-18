const youtubeApiUrl = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=replies%2C%20snippet';
const apiKey = 'AIzaSyDvEHdQhrNzw1Ksq1PqABCIj4pX1vbZhl8'

const axios = require('axios').default;

const createRequestUrl = function(baseUrl, apiKey, videoId){
    return `${baseUrl}&key=${apiKey}&videoId=${videoId}`;
}

const getCommentsFromResponse = function(response){
    return response.data
    .items
    .map(i => i.snippet.topLevelComment.snippet.textOriginal);
}

const extractVideoId = function(videoUrl){
    return videoUrl.split("?v=")[1];
}

// Make sure the client is loaded before calling this method.
const getCommentsByVideoUrl = function(videoUrl) {
    const videoId = extractVideoId(videoUrl);
    const requestUrl = createRequestUrl(youtubeApiUrl, apiKey, videoId);
    return axios
      .get(requestUrl)
      .then(response => getCommentsFromResponse(response));
}

export default ({
    getCommentsByVideoUrl
});

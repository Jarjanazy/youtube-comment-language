const youtubeApiUrl = 'https://youtube.googleapis.com/youtube/v3/commentThreads?maxResults=100&part=replies%2C%20snippet';
const apiKey = 'AIzaSyDvEHdQhrNzw1Ksq1PqABCIj4pX1vbZhl8'

const extractVideoId = function(videoUrl){
    let videoIdWithPossibletimeStamp = videoUrl.split("?v=")[1];
    return videoIdWithPossibletimeStamp.split("&t")[0];
}

const createRequestUrl = function(videoUrl){
    const videoId = extractVideoId(videoUrl);
    return `${youtubeApiUrl}&key=${apiKey}&videoId=${videoId}`;
}

const createRequestUrlForNextPageToken = function(requestUrl, nextPageToken){
    return `${requestUrl}&pageToken=${nextPageToken}`;
}

const getCommentsFromResponse = function(response){
    return response
    .data
    .items
    .map(i => i.snippet.topLevelComment.snippet.textOriginal);
}

export default ({
    createRequestUrl,
    createRequestUrlForNextPageToken,
    getCommentsFromResponse
});

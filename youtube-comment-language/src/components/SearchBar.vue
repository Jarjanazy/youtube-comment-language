<template>
    <c-flex justify="center" gridGap="2">
        <c-input type="text" placeholder="Enter Video URL" v-model="url" style="width:50%"></c-input>
        <LanguageSelection @language-changed="searchLanguage=$event" ></LanguageSelection>
        <c-button @click="search"> Search </c-button>
    </c-flex>
</template>

<script>
import LanguageSelection from './LanguageSelection.vue'
import YoutubeCommentsService from './../services/YoutubeCommentsService.js'
import LanguageDetectorService from './../services/LanguageDetectorService.js'

const axios = require('axios').default;

export default({
   name: "SearchBar",
   components: {LanguageSelection},
   data: function(){
       return{
           url: "",
           searchLanguage: "",
       }
   },
   methods: {
       search: function(){
           this.getCommentsByVideoUrl(this.url)
               .then(initialComments => this.emitInitialComments(initialComments));
       },
        getCommentsByVideoUrl: function(videoUrl) {
            const requestUrl = YoutubeCommentsService.createRequestUrl(videoUrl);
            return axios
                .get(requestUrl)
                .then(response => {
                    const initialComments = YoutubeCommentsService.getCommentsFromResponse(response);
                    this.getCommentsByPageToken(requestUrl, response.data.nextPageToken);
                    return initialComments;
                });
        },
        emitInitialComments: function(comments){
            const filterComments = LanguageDetectorService.getAllStringOfLanguage(comments, this.searchLanguage);
            this.$emit('initialCommentsReady', filterComments);
        },
        getCommentsByPageToken: function(requestUrl, nextPageToken){
            if (typeof nextPageToken === undefined)
                return;
            axios
                .get(YoutubeCommentsService.createRequestUrlForNextPageToken(requestUrl, nextPageToken))
                .then(response => {
                    this.emitOtherPageComments(response);
                    this.getCommentsByPageToken(requestUrl, response.data.nextPageToken);
                });
        },
        emitOtherPageComments: function(response){
            const comments = YoutubeCommentsService.getCommentsFromResponse(response);
            const filterComments = LanguageDetectorService.getAllStringOfLanguage(comments, this.searchLanguage);
            this.$emit('otherCommentsReady', filterComments);
        }
   }
})
</script>

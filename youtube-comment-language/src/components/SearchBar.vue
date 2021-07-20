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
       search: async function(){
           const requestUrl = YoutubeCommentsService.createRequestUrl(this.url);
           const response = await axios.get(requestUrl);

           this.getInitialCommentsByVideoUrl(response);

           this.getCommentsByPageToken(requestUrl, response.data.nextPageToken);
       },
        getInitialCommentsByVideoUrl: function(response) { 
            const initialComments = YoutubeCommentsService.getCommentsFromResponse(response);
            this.emitInitialComments(initialComments);
        },
        emitInitialComments: function(comments){
            const filterComments = LanguageDetectorService.getAllStringOfLanguage(comments, this.searchLanguage);
            this.$emit('initialCommentsReady', filterComments);
            this.$emit('changeLoader', true);
        },
        getCommentsByPageToken: function(requestUrl, nextPageToken){
            if (typeof nextPageToken === 'undefined'){
                this.$emit('changeLoader', false);
                return;
            }
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

<template>
    <div>
        <input type="text" placeholder="Enter Video URL" v-model="url">
        <button @click="search"> Search </button>
        <LanguageSelection @language-changed="searchLanguage=$event" ></LanguageSelection>
    </div>
</template>

<script>
import LanguageSelection from './LanguageSelection.vue'
import YoutubeCommentsService from './../services/YoutubeCommentsService.js'
import LanguageDetectorService from './../services/LanguageDetectorService.js'

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
           this.comments = [];
           YoutubeCommentsService
           .getCommentsByVideoUrl(this.url)
           .then(comments => {
               const filterComments = LanguageDetectorService.getAllStringOfLanguage(comments, this.searchLanguage);
               this.$emit('commentsReady', filterComments);
           });
       },
   }
})
</script>

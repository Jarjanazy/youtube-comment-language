<template>
    <div>
        <input type="text" placeholder="Enter Video URL" v-model="url">
        <button @click="search"> Search </button>
        <LanguageSelection @language-changed="searchLanguage=$event" ></LanguageSelection>

        <Comments :comments="comments" v-if="displayComments"></Comments>
    </div>
</template>

<script>
import LanguageSelection from './LanguageSelection.vue'
import YoutubeCommentsService from './../services/YoutubeCommentsService.js'
import Comments from './Comments.vue';

export default({
   name: "SearchBar",
   components: {LanguageSelection, Comments},
   data: function(){
       return{
           url: "",
           searchLanguage: "",
           comments: [],
           displayComments: false
       }
   },
   methods: {
       search: function(){
           YoutubeCommentsService
           .getCommentsByVideoUrl(this.url)
           .then(comments => {
               this.comments = comments;
               this.displayComments = true;
           });
       },
   }
})
</script>

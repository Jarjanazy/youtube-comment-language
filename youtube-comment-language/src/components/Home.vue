<template>
    <div>
        <h2>{{appName}}</h2>
        <SearchBar @commentsReady="addComments($event)"></SearchBar>
        <Comments :comments="comments" v-if="displayComments"></Comments>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Comments from './Comments.vue';

export default ({
    name : "Home",
    components: {SearchBar, Comments},
    data: function(){
        return{
            appName: "Cool App",
            comments: [],
            displayComments: false

        }
    },
    methods:{
        addComments: function(comments){
            this.comments = comments;
            this.displayComments = true;
        }
    }
})
</script>

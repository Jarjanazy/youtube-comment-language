<template>
    <div>
        <h2>{{appName}}</h2>
        <SearchBar @initialCommentsReady="addComments($event)" @otherCommentsReady="concatComments($event)"></SearchBar>
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
        },
        concatComments: function(comments){
            this.comments = this.comments.concat(comments);
        }
    }
})
</script>

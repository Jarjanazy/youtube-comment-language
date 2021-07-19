<template>
    <c-stack :spacing="4">
        <c-box>
            <SearchBar style="margin:30px" @initialCommentsReady="addComments($event)"
                @otherCommentsReady="concatComments($event)" @changeLoader="showLoader=$event">
            </SearchBar>
        </c-box>
        <c-box>
            <Comments :comments="comments" v-if="displayComments"></Comments>
        </c-box>
        <Center v-if="showLoader">
            <c-spinner
                thickness="4px"
                speed="0.65s"
                empty-color="green.200"
                color="vue.500"
                size="xl"
            />
        </Center>
    </c-stack>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Comments from './Comments.vue';

export default ({
    name : "Home",
    components: {SearchBar, Comments},
    data: function(){
        return{
            comments: [],
            displayComments: false,
            showLoader: false
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

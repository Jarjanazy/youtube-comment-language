<template>

<div>
    <c-list v-for="(item, index) in comments" :key="index">
        <Comment :commentString="item"></Comment>
    </c-list>
</div>
</template>

<script>
import Comment from './Comment.vue'
export default({
    name: 'Comments',
    components: {Comment},
    props:{
        comments: {type: Array}
    },
    data: function(){
        return {

        }
    }

});

</script>
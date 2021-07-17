<template>

<div>
    <li v-for="(item, index) in comments" :key="index">
        <Comment :commentString="item"></Comment>
    </li>
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
<template>
    <h2>{{commentString}}</h2>
</template>

<script>
export default({
    name: 'Comment',
    props:{
        commentString: {type: String}
    },
    data: function(){
        return {

        }
    }

});

</script>
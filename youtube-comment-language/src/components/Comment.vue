<template>
    <c-list-item>
        <c-box :p="5" shadow="md" border-width="1px">
            <h2>{{commentString}}</h2>
        </c-box>
    </c-list-item>
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
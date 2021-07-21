<template>
    <c-box w="sm">
        <c-image :src="imageUrl"/>
    </c-box>
</template>

<script>
export default({
 name: "videoPreview",
    props: {
        imageUrl: String
    },
    data: function() {
        return {
        }
    }
});
</script>
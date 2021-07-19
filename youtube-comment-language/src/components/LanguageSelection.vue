<template>
    <div>
        <c-select id="languages" v-model="selectedLanguage" placeholder="Select A Language">
            <option value="arabic">Arabic</option>
            <option value="english">English</option>
            <option value="turkish">Turkish</option>
            <option value="spanish">Spanish</option>
            <option value="russian">Russian</option>
        </c-select>
    </div>
</template>


<script>

export default({
    name: 'LanguageSelection',
    data: function(){
        return{
            selectedLanguage: ""
        }
    },
    watch: {
        selectedLanguage: function(newLanguage){
            this.$emit('language-changed', newLanguage);
        }
    }

})

</script>
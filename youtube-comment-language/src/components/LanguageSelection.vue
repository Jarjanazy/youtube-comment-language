<template>
    <div>
        <select id="languages" v-model="selectedLanguage">
            <option value="arabic">Arabic</option>
            <option value="english">English</option>
        </select>
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
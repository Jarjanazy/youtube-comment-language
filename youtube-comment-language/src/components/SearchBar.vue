<template>
    <div>
        <input type="text" placeholder="Enter Video URL" v-model="url">
        <button @click="search"> Search </button>
        <LanguageSelection @language-changed="searchLanguage=$event" ></LanguageSelection>
    </div>
</template>

<script>
import LanguageSelection from './LanguageSelection.vue'

export default({
   name: "SearchBar",
   components: {LanguageSelection},
   data: function(){
       return{
           url: "",
           searchLanguage: ""
       }
   },
   methods: {
       search: function(){
           alert(this.url + " " + this.searchLanguage);
       }
   }
})
</script>

<template>
    <div>
        <input type="text" :placeholder="placeHolder">
        <button> Search </button>
        <LanguageSelection></LanguageSelection>
    </div>
</template>

<script>
import LanguageSelection from './LanguageSelection.vue'

export default({
   name: "SearchBar",
   components: {LanguageSelection},
   data: function(){
       return{
           placeHolder: "Enter Video URL"
       }
   }
})
</script>

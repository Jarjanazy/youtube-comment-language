<template>
    <div>
        <h2>{{appName}}</h2>
        <SearchBar></SearchBar>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default ({
    name : "Home",
    components: {SearchBar},
    data: function(){
        return{
            appName: "Cool App"
        }
    }
})
</script>

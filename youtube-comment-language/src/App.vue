<template>
  <c-theme-provider>
    <c-reset />
    <Home></Home>
  </c-theme-provider>
</template>

<script>
import Home from './components/Home.vue';

export default {
  components: { Home },
  name: "App",
};
</script>

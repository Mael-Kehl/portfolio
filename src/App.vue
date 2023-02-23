<template>
  <main>
    <Navigation @set-current-page="setCurrentPage"/>
    <Transition>
    
    </Transition>
    <Home v-if="currentPage == HOME_PAGE" @set-current-page="setCurrentPage"/>
  </main>
</template>


<script>
import Navigation from './components/Navigation.vue';
import Home from './components/Home.vue';
import { ref } from 'vue';

export default {
  components: {Navigation, Home},
  data() {
    return {
      currentPage: 0,
      HOME_PAGE: 0,
    }
  },
  methods: {
    setCurrentPage(current) {
      this.currentPage = current;
    }
  }
}


</script>


<style>
  @import url('./assets/base.css');

  main {
    display: flex;
    flex-direction: column;
  }

</style>

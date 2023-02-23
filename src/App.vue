<template>
  <main>
    <Navigation @set-current-page="setCurrentPage"/>
    <Transition name="views" appear>
      <Home v-if="currentPage === HOME_PAGE" @set-current-page="setCurrentPage"/>
      <Contact v-else-if="currentPage === CONTACT_PAGE"/>
    </Transition>
  </main>
</template>


<script>
import Navigation from './components/Navigation.vue';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import { ref } from 'vue';

export default {
  components: {Navigation, Home, Contact},
  data() {
    return {
      currentPage: 0,
      HOME_PAGE: 0,
      PROJECTS_PAGE: 1,
      CAREER_PAGE: 2,
      STUDIES_PAGE: 3,
      CONTACT_PAGE: 4,
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

  /* Transition element properties */
  .views-enter-active {
    animation: slide-in 0.5s;
  }
  .views-leave-active {
    animation: slide-out 0.25s;
  }

  /* 
  We want the slide in to be slower than the slide out, that's why we only start the animation at 50% 
  This way the previous element has the time do be removed from the dom
  */
  @keyframes slide-in {
    0%{
      opacity: 0;
      transform: translateX(500px);
    }
    50% {
      opacity: 0;
      transform: translateX(500px);
    }
    100%{
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    0%{
      opacity: 1;
      transform: translateX(0);
    }
    100%{
      opacity: 0;
      transform: translateX(-500px);
    }
  }




</style>

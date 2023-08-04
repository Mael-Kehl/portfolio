<template>
    <header @onscroll="handleScroll">
        <div id="home-part">
            <!-- <HomeIcon :width="40" :height="40" @click="$emit('setCurrentPage', 0)"/> -->
            <h1 class="home-logo" @click="$emit('setCurrentPage', 0)">MK</h1>
        </div>
        <ul class="full-screen-menu">
            <!-- <li @click="$emit('setCurrentPage', 1)" :class=" currentPage == 1 ? 'active' : '' ">Projects</li> -->
            <li @click="$emit('setCurrentPage', 2)" :class=" currentPage == 2 ? 'active' : '' ">À propos</li>
            <!-- <li @click="$emit('setCurrentPage', 3)" :class=" currentPage == 3 ? 'active' : '' ">Skills</li> -->
            <li @click="$emit('setCurrentPage', 4)" :class=" currentPage == 4 ? 'active' : '' ">Contact</li>
        </ul>
        <Slide width="200" right :closeOnNavigation="true">
            <ul class="phone-menu">
                <!-- <li @click="$emit('setCurrentPage', 1)" :class=" currentPage == 1 ? 'active' : '' ">Projects</li> -->
                <li @click="$emit('setCurrentPage', 2)" :class=" currentPage == 2 ? 'active' : '' ">À propos</li>
                <!-- <li @click="$emit('setCurrentPage', 3)" :class=" currentPage == 3 ? 'active' : '' ">Skills</li> -->
                <li @click="$emit('setCurrentPage', 4)" :class=" currentPage == 4 ? 'active' : '' ">Contact</li>
            </ul>
        </Slide>
        
        
    </header>
</template>


<script>
import HomeIcon from './icons/HomeIcon.vue';
import { Slide } from 'vue3-burger-menu';

export default {
  emits: ['setCurrentPage'],
  props: {
    currentPage: Number
  },
  components: {
    Slide, HomeIcon
  },
}


</script>


<style scoped>

    .home-logo {
        font-size: 40px;
        cursor: pointer;
    }


    header {
        position: fixed;
        height: 15vh; 
        width: 100vw;
        display: flex;
        font-size: 20px;
        background-color: var(--background-color);
        overflow: hidden;
        z-index: 10;
    }

    #home-part{
        height: 100%;
        width: 40%;
        display: flex;
        align-items: center;
        padding: 0 40px;
    }

    ul {
        list-style: none;
    }

    .full-screen-menu {
        width: 60%;
        height: 15vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 100px;
    }


    .phone-menu {
        display: flex;
        flex-direction: column;
    }

    .phone-menu > li {
        margin-bottom: 15px;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 800px) {
        .full-screen-menu {
            display: none;
        }
    }
    
    li {
        cursor: pointer;
        transition: all 0.1s ease-in-out;
        font-size: 1.25em;
    }

    .full-screen-menu > li {
      border-bottom: 4px solid var(--background-color);
      transition: 0.4s ease;
    }

    .full-screen-menu > li:hover{
      border-bottom-color: var(--blue-color);
    }

    .full-screen-menu > .active {
        border-bottom: 4px solid var(--blue-color);
    }


    .phone-menu > .active {
        color: var(--blue-color);
        font-weight: bold;
    }
</style>

<style>
/* Style rules about the burger menu */



</style>
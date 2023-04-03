<template>
    <header @onscroll="handleScroll">
        <div id="home-part">
            <!-- <HomeIcon :width="40" :height="40" @click="$emit('setCurrentPage', 0)"/> -->
            <h1 class="home-logo" @click="$emit('setCurrentPage', 0)">MK</h1>
        </div>
        <ul class="full-screen-menu">
            <li @click="$emit('setCurrentPage', 1)" :class=" currentPage == 1 ? 'active' : '' ">Projects</li>
            <li @click="$emit('setCurrentPage', 2)" :class=" currentPage == 2 ? 'active' : '' ">About</li>
            <li @click="$emit('setCurrentPage', 3)" :class=" currentPage == 3 ? 'active' : '' ">Skills</li>
            <li @click="$emit('setCurrentPage', 4)" :class=" currentPage == 4 ? 'active' : '' ">Contact</li>
        </ul>
        <Slide width="200" right :closeOnNavigation="true">
            <ul class="phone-menu">
                <li @click="$emit('setCurrentPage', 1)" :class=" currentPage == 1 ? 'active' : '' ">Projects</li>
                <li @click="$emit('setCurrentPage', 2)" :class=" currentPage == 2 ? 'active' : '' ">About</li>
                <li @click="$emit('setCurrentPage', 3)" :class=" currentPage == 3 ? 'active' : '' ">Skills</li>
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
        font-size: 18px;
    }

    @media screen and (max-width: 800px) {
        .full-screen-menu {
            display: none;
        }
    }
    
    li {
        cursor: pointer;
        transition: all 0.1s ease-in-out;
        font-size: 25px;
    }

    .full-screen-menu > .active {
        border-radius: 15px;
        padding: 10px 15px;
        background-color: var(--blue-color);
    }

    .phone-menu > .active {
        color: white;
    }
</style>

<style>
/* Style rules about the burger menu */

    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      top: 50px;
      left: 80vw;
      cursor: pointer;
    }

    @media screen and (min-width: 800px) {
        .bm-burger-button {
            display: none;
        }
    }

    .bm-burger-bars {
      background-color: var(--text-color);
    }

    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: var(--background-color);
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
        background-color: var(--background-color);
    }

    .bm-item-list {
      color: var(--background-color);
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }


</style>
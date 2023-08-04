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
        <div class="burger-menu-button" @click="showPhoneMenu()">
          <span class="burger-menu-button-bar"></span>
          <span class="burger-menu-button-bar"></span>
          <span class="burger-menu-button-bar"></span>
        </div>
        <div class="burger-phone-menu" id="burger-phone-menu">
            <div class="fake-border"></div>
            <Cross id="burger-cross" @click="closePhoneMenu()"/>
            <ul class="phone-menu-list">
                <li @click="closePhoneMenu(); $emit('setCurrentPage', 0);" :class=" currentPage == 1 ? 'active' : ''">Home</li> 
                <li @click="closePhoneMenu(); $emit('setCurrentPage', 2);" :class=" currentPage == 2 ? 'active' : ''">À propos</li> 
                <li @click="closePhoneMenu(); $emit('setCurrentPage', 4);" :class=" currentPage == 4 ? 'active' : '' ">Contact</li>
            </ul>
        </div>
            
        
        
    </header>
</template>


<script>
import HomeIcon from './icons/HomeIcon.vue';
import Cross from './icons/Cross.vue';

export default {
  emits: ['setCurrentPage'],
  props: {
    currentPage: Number
  },
  components: {
    HomeIcon, Cross
  },
  methods: {
    showPhoneMenu() {
      const phoneMenu = document.getElementById("burger-phone-menu");
      phoneMenu.style.width = "200px";
      const cross = document.getElementById("burger-cross");
      cross.style.display = "block";

    }, 
    closePhoneMenu() {
      const phoneMenu = document.getElementById("burger-phone-menu");
      phoneMenu.style.width = "0px";
      const cross = document.getElementById("burger-cross");
      cross.style.display = "none";
    }
  }
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

    @media screen and (max-width: 800px) {
        .full-screen-menu {
            display: none;
        }
    }

    @media screen and (min-width: 800px) {
        .burger-menu-button {
            display: none;
        }

        .burger-menu-button-bar {
          display: none;
        }
        .burger-cross {
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


    .phone-menu-list > .active {
        color: var(--blue-color);
        font-weight: bold;
    }

    .burger-menu-button {
      width: 40px; 
      height: 30px;
      position: absolute;
      top: 40px;
      left: 75vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
    }

    .burger-menu-button-bar {
      height: 20%;
      width: 100%;
      background-color: var(--blue-color);
    }

    .burger-phone-menu{
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 100vh;
      padding-top: 80px;
      z-index: 3000;
      background-color: var(--background-color);
      transition: 0.5s;
    }

    .phone-menu-list {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-left: 30px;
    }

    .phone-menu-list > li {
        margin-bottom: 15px;
        font-size: 1.2rem;
    }

    .fake-border {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      background-color: var(--blue-color);
    }

    #burger-cross {
      cursor: pointer;
      position: absolute; 
      top: 40px;
      right: 20px;
      display: none;
      transition: 0.5s;
    }
</style>

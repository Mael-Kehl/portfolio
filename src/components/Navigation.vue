<template>
    <header>
        <div id="home-part">
            <HomeIcon :width="40" :height="40" @click="$emit('setCurrentPage', 0)"/>
        </div>
        <ul>
            <li @click="$emit('setCurrentPage', 1)" :class=" currentPage == 1 ? 'active' : '' ">Projects</li>
            <li @click="$emit('setCurrentPage', 2)" :class=" currentPage == 2 ? 'active' : '' ">Career</li>
            <li @click="$emit('setCurrentPage', 3)" :class=" currentPage == 3 ? 'active' : '' ">Studies</li>
            <li @click="$emit('setCurrentPage', 4)" :class=" currentPage == 4 ? 'active' : '' ">Contact</li>
        </ul>
        
    </header>
</template>


<script>
import HomeIcon from './icons/HomeIcon.vue';

export default {
  emits: ['setCurrentPage'],
  props: {
    currentPage: Number
  },
  components: {
    HomeIcon
  }
}


</script>


<style scoped>
    header {
        height: 15vh; 
        width: 100vw;
        display: flex;
        font-size: 20px;
    }

    #home-part{
        height: 100%;
        width: 40%;
        display: flex;
        align-items: center;
        padding: 0 40px;
    }

    ul {
        width: 60%;
        height: 15vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        padding: 0 100px;
    }
    
    li {
        cursor: pointer;
        transition: all 0.1s ease-in-out;
    }

    .active {
        border-radius: 15px;
        padding: 10px 15px;
        background-color: var(--dark-grey-color);
        color: white;
    }

</style>
<template>
    <header>
        <div id="home-part" @click="$emit('setCurrentPage', 0)">
            Home
        </div>
        <ul>
            <li @click="$emit('setCurrentPage', 1)">Projects</li>
            <li >Studies</li>
            <li>Contact</li>
        </ul>
        
    </header>
</template>


<script setup>

const emits = defineEmits(['setCurrentPage']);

</script>


<style>
    header {
        height: 15vh; 
        width: 100vw;
        display: flex;
        font-size: 20px;
    }

    #home-part{
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        padding: 0 40px;
        cursor: pointer;
    }

    ul {
        width: 50%;
        height: 15vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    }
    
    li {
        cursor: pointer;
    }

</style>
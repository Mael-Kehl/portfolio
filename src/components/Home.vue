<template >
<section>
    <div class="presentation-div">
        <h4>
            Hello, my name is
        </h4>
        <h1>MAËL KEHL</h1>
        <p>Creative Developper, </p>
        <p>Apprentice Engineer</p>
        <div class="projects-link">
            <button id="projects-button" @click="$emit('setCurrentPage', 1)">
                Fly
            </button>
            <p id="projects-text">Through my projects</p>
        </div>
    </div>
    <Scene />
  </section>
</template>


<script>
import Scene from './Scene.vue';


export default {
    components: {Scene},
    
}
</script>

<style scoped>

    section {
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 70px;
    }
    .presentation-div{
        width: 50%;
        padding: 0 70px;
    }

    h1 {
        font-size: 55px;
        font-weight: bolder;
        margin-bottom: 30px;
    }

    h4 {
        font-weight: 500;
        margin-bottom: 30px;
    }

    p{
        font-size: 25px;
        font-weight: 400;
    }
    
    .projects-link{
        margin-top: 60px;
        display: flex;
        align-items: center;
    }

    #projects-text, button { 
        font-size: 20px;
    }

    button {
        width: 80px;
        height: 40px;
        border: none;
        border-radius: 15px;
        background-color: #3a3a3a;
        color: #fff;
        margin-right: 20px;
        cursor: pointer;
    }




</style>
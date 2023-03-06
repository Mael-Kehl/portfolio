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
    <KeepAlive>
        <NewScene/>
    </KeepAlive>
  </section>
</template>


<script>
import Scene from '../components/Scene.vue';
import NewScene from '../components/NewScene.vue';


export default {
    components: {Scene, NewScene},
    
}
</script>

<style scoped>

    section {
        height: 70vh;
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
        font-size: 75px;
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
        color: #fff;
        margin-right: 20px;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        section {
            flex-direction: column-reverse;
            padding: 0;
            height: fit-content;
        }

        .presentation-div {
            width: 100vw;
            padding: 40px;
        }

        h1 {
            font-size: 55px;
            margin-bottom: 20px;
        }

        h4 {
            margin-bottom: 10px;
        }

        p{
            font-size: 20px;
        }

        .projects-link{
            margin-top: 30px;
        }

        #projects-text, button { 
            font-size: 18px;
        }

        button {
            margin-right: 10px;
        }
    }




</style>
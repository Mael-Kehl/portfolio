<template >
<section>
    <div class="presentation-div">
        <div class="presentation-div-text-container">
            <h4>
                Hey, je m'appelle
            </h4>
            <h1>MAËL KEHL</h1>
            <p>Développeur Freelance </p>
            <p>& Apprenti Ingénieur</p>
            <div class="projects-link">
                <p id="projects-button" @click="$emit('setCurrentPage', 2)">
                    Check 
                </p>
                <p id="projects-text"> mon profil</p>
            </div>
        </div>
    </div>
    
    <RocketScene/>
    
  </section>
</template>


<script>
import RocketScene from '../components/RocketScene.vue';


export default {
    components: {RocketScene},
    
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
        min-width: 50%;
        /* padding: 0 0 0 200px; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 75px;
        font-weight: bolder;
        margin-bottom: 30px;
    }

    h4 {
        font-weight: 500;
        margin-bottom: 0px;
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

    #projects-text { 
        font-size: 20px;
        border-bottom: 4px solid var(--background-color);
    }

    #projects-button {
        border-bottom: 4px solid var(--blue-color);
        color: var(--text-color);
        background-color: var(--background-color);
        cursor: pointer;
        font-size: 20px;
        margin-right: 5px;
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